#!/usr/bin/env node
import 'dotenv/config';
import view from '@fastify/view';
import pug from 'pug';
import i18next from 'i18next';
import path from 'path';
import { fileURLToPath } from 'url';
import { Model } from 'objection';
import Knex from 'knex';
import Rollbar from 'rollbar';

// Importación de Modelos
import Label from './models/Label.js';
import TaskStatus from './models/TaskStatus.js';
import Task from './models/Task.js';
import User from './models/users.js';

// Importación de rutas
import sessionsRoutes from './routes/sessions.js';
import usersRoutes from './routes/users.js';
import registerStatusesRoutes from './routes/statuses.js';
import registerTasksRoutes from './routes/tasks.js';
import labelsRoutes from './routes/labels.js';

// Importación de plugins
import reverseRoutes from 'fastify-reverse-routes';
import fastifyCookie from '@fastify/cookie';
import fastifySession from '@fastify/session';
import fastifyFlash from '@fastify/flash';

import knexConfig from '../knexfile.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de Rollbar (Fuera de la función para que sea global)
const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  environment: process.env.NODE_ENV || 'development',
});

// EXPORTACIÓN PRINCIPAL: Recibe exactamente 2 argumentos (app, options)
export default async (app, options) => {
  
  // 1. CONFIGURACIÓN DE BASE DE DATOS
  const env = process.env.NODE_ENV || 'development';
  const knex = Knex(knexConfig[env]);
  Model.knex(knex);

  // 2. MANEJADOR DE ERRORES GLOBAL (Rollbar)
  app.setErrorHandler((error, request, reply) => {
    rollbar.error(error, request.raw);
    app.log.error(error);
    reply.status(error.statusCode || 500).send(error);
  });

  // 3. DECORADORES PARA OBJECTION
  app.decorate('objection', {
    models: {
      user: User,
      taskStatus: TaskStatus,
      task: Task,
      label: Label,
    },
  });

  // 4. INICIALIZAR TRADUCCIONES
  await i18next.init({
    lng: 'es',
    resources: {
      es: {
        translation: {
          layouts: {
            main: {
              title: 'Mi Aplicación Hexlet',
              brand: 'Hexlet Proyecto',
              users: 'Usuarios',
              statuses: 'Estados',
              tasks: 'Tareas',
              labels: 'Etiquetas',
              footer_text: '© 2026 William Suarez - Estudiante de Software'
            }
          },
          views: {
            welcome: {
              index: {
                hello: '¡Hola desde el Jumbotron!',
                description: 'Este es un ejemplo funcional usando Fastify, Pug y Bootstrap.',
                more: 'Saber más'
              }
            }
            // Agrega aquí el resto de tus traducciones si las necesitas
          }
        }
      }
    }
  });

  // 5. REGISTRO DE PLUGINS
  await app.register(fastifyCookie);
  await app.register(fastifySession, {
    secret: process.env.SESSION_SECRET || 'a-very-long-secret-key-at-least-32-chars-long',
    cookie: { secure: false },
  });
  await app.register(fastifyFlash);
  await app.register(reverseRoutes);

  // 6. MOTOR DE PLANTILLAS
  await app.register(view, {
    engine: { pug },
    root: path.join(__dirname, 'views'),
    defaultContext(reply) {
      return {
        route: (name, params = {}, query = {}) => {
          try {
            return app.reverse(name, params, query);
          } catch (err) {
            return '#';
          }
        },
        t: (key) => i18next.t(key),
        getMessages: () => (reply.flash ? reply.flash() : {}),
        formatDate: (date) => (date ? new Date(date).toLocaleString() : ''),
      };
    },
  });

  // 7. REGISTRO DE RUTAS
  usersRoutes(app);
  sessionsRoutes(app);
  registerStatusesRoutes(app);
  registerTasksRoutes(app);
  labelsRoutes(app);

  app.get('/', { name: 'root' }, async (request, reply) => {
    return reply.view('index.pug');
  });

  // 8. CIERRE LIMPIO DE CONEXIONES
  app.addHook('onClose', async () => {
    await knex.destroy();
  });

  // Nota: No llamamos a app.listen(), de eso se encarga fastify-cli
};