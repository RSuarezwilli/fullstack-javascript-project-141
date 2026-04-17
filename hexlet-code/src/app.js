#!/usr/bin/env node
import 'dotenv/config'; // 1. CARGA DE VARIABLES DE ENTORNO (Debe ser la primera línea)
import Fastify from 'fastify';
import view from '@fastify/view';
import pug from 'pug';
import i18next from 'i18next';
import path from 'path';
import { fileURLToPath } from 'url';
import { Model } from 'objection';
import Knex from 'knex';
import Rollbar from 'rollbar'; // 2. IMPORTACIÓN DE ROLLBAR

// Importación de Modelos...
import Label from './models/Label.js';
import TaskStatus from './models/TaskStatus.js';
import Task from './models/Task.js';
import User from './models/users.js';

// Importación de rutas...
import sessionsRoutes from './routes/sessions.js';
import usersRoutes from './routes/users.js';
import registerStatusesRoutes from './routes/statuses.js';
import registerTasksRoutes from './routes/tasks.js';
import labelsRoutes from './routes/labels.js';

// Importación de plugins...
import reverseRoutes from 'fastify-reverse-routes';
import fastifyCookie from '@fastify/cookie';
import fastifySession from '@fastify/session';
import fastifyFlash from '@fastify/flash';

import knexConfig from '../knexfile.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 3. CONFIGURACIÓN DE ROLLBAR
const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  environment: process.env.NODE_ENV || 'development',
});

const init = async () => {
  const app = Fastify({ 
    logger: process.env.NODE_ENV !== 'test'
  });

  // 4. MANEJADOR DE ERRORES GLOBAL
  // Captura cualquier error en las rutas y lo envía a Rollbar
  app.setErrorHandler((error, request, reply) => {
    rollbar.error(error, request.raw); // Envío a la nube
    app.log.error(error); // Log local
    reply.status(error.statusCode || 500).send(error);
  });

  // 1. CONFIGURACIÓN DE BASE DE DATOS
  const env = process.env.NODE_ENV || 'development';
  const knex = Knex(knexConfig[env]);
  Model.knex(knex);

  app.decorate('objection', {
    models: {
      user: User,
      taskStatus: TaskStatus,
      task: Task,
      label: Label,
    },
  });

  // 2. INICIALIZAR TRADUCCIONES (Mantenemos tu configuración actual)
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
            tasks: {
              index: {
                title: 'Tareas',
                create: 'Crear tarea',
                id: 'ID',
                name: 'Nombre',
                status: 'Estado',
                author: 'Autor',
                executor: 'Ejecutor',
                createdAt: 'Fecha de creación',
                edit: 'Editar',
                delete: 'Eliminar',
              },
              search: {
                status: 'Estado',
                executor: 'Ejecutor',
                label: 'Etiqueta',
                isCreatorUser: 'Solo mis tareas',
                filter: 'Filtrar'
              }
            },
            welcome: {
              index: {
                hello: '¡Hola desde el Jumbotron!',
                description: 'Este es un ejemplo funcional usando Fastify, Pug y Bootstrap.',
                more: 'Saber más'
              }
            }
          }
        }
      }
    }
  });

  // 3. REGISTRO DE PLUGINS
  await app.register(fastifyCookie);
  await app.register(fastifySession, {
    secret: process.env.SESSION_SECRET || 'a-very-long-secret-key-at-least-32-chars-long',
    cookie: { secure: false },
  });
  await app.register(fastifyFlash);
  await app.register(reverseRoutes);

  // 4. MOTOR DE PLANTILLAS Y RUTAS
  app.after(() => {
    app.register(view, {
      engine: { pug },
      root: path.join(__dirname, 'views'),
      defaultContext(reply) {
        return {
          route: (name, params = {}, query = {}) => {
            if (typeof name !== 'string') return '#';
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

    usersRoutes(app);
    sessionsRoutes(app);
    registerStatusesRoutes(app);
    registerTasksRoutes(app);
    labelsRoutes(app);

    app.get('/', { name: 'root' }, async (request, reply) => {
      return reply.view('index.pug');
    });

    // RUTA PARA PROBAR ROLLBAR (Puedes borrarla después)
    app.get('/test-error', async () => {
      throw new Error("¡Prueba de Rollbar exitosa!");
    });
  });

  // 6. CIERRE LIMPIO DE CONEXIONES
  app.addHook('onClose', async () => {
    await knex.destroy();
  });

  await app.ready();
  return app;
};

// 7. ARRANQUE DEL SERVIDOR
if (process.env.NODE_ENV !== 'test') {
  const start = async () => {
    try {
      const server = await init();
      await server.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' });
    } catch (err) {
      rollbar.error(err); // Captura error de arranque
      console.error(err);
      process.exit(1);
    }
  };
  start();
}

export default init;
