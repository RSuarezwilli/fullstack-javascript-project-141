

import Fastify from 'fastify';
import view from '@fastify/view';
import pug from 'pug';
import i18next from 'i18next';
import path from 'path';
import { fileURLToPath } from 'url';
import { Model } from 'objection';
import Knex from 'knex';
import Label from './models/Label.js';
// Importación de plugins y rutas
import sessionsRoutes from './routes/sessions.js';
import reverseRoutes from 'fastify-reverse-routes';
import fastifyCookie from '@fastify/cookie';
import fastifySession from '@fastify/session';
import fastifyFlash from '@fastify/flash';
import usersRoutes from './routes/users.js';
import knexConfig from '../knexfile.js';
import TaskStatus from './models/TaskStatus.js';
import registerStatusesRoutes from './routes/statuses.js';
import Task from './models/Task.js';
import registerTasksRoutes from './routes/tasks.js';
import User from './models/users.js';
import labelsRoutes from './routes/labels.js';

// 1. CONFIGURACIÓN DE BASE DE DATOS (El "combustible")
const knex = Knex(knexConfig.development);
Model.knex(knex); // Conecta los modelos a la base de datos

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = Fastify({ logger: true });
app.decorate('objection', {
  models: {
    user: User,
    taskStatus: TaskStatus, // 'taskStatus' debe coincidir con lo que usas en routes/statuses.js
    task: Task,
    label: Label,
  },
});

// 2. INICIALIZAR TRADUCCIONES (i18next)
await i18next.init({
  lng: 'es',
  resources: {
    es: {
      translation: {
        // ... dentro de es.translation.views
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
  new: {
    title: 'Crear tarea',
    name: 'Nombre',
    description: 'Descripción',
    statusId: 'Estado',
    executorId: 'Ejecutor',
    submit: 'Crear',
  },
  // Dentro de es.translation.views
labels: {
  index: {
    title: 'Etiquetas',
    create: 'Crear etiqueta',
    id: 'ID',
    name: 'Nombre',
    createdAt: 'Fecha de creación',
  },
  new: {
    title: 'Crear etiqueta',
    submit: 'Crear',
  },
  edit: {
    title: 'Editar etiqueta',
    submit: 'Actualizar',
  }
},
},
        layouts: {
          main: {
            title: 'Mi Aplicación Hexlet',
            brand: 'Hexlet Proyecto',
            users: 'Usuarios',
            statuses: 'Estados',
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
        }
      }
    }
  }
});

// 3. REGISTRO DE PLUGINS (Orden crítico para que funcione el "Flash")
await app.register(fastifyCookie);
await app.register(fastifySession, {
  secret: 'a-very-long-secret-key-at-least-32-chars-long',
  cookie: { secure: false },
});
await app.register(fastifyFlash);
await app.register(reverseRoutes);
// 4. MOTOR DE PLANTILLAS (Pug) - VERSIÓN CORREGIDA
// 4. MOTOR DE PLANTILLAS (Pug) - CONFIGURACIÓN CORREGIDA
app.register(view, {
  engine: { pug },
  root: path.join(__dirname, 'views'),
  // CAMBIO CLAVE: Usamos una función que recibe 'reply'
  defaultContext(reply) {
    return {
      // Función route que no explota si recibe basura
      route(name, params = {}, query = {}) {
        if (typeof name !== 'string') return '#';
        try {
          return app.reverse(name, params, query);
        } catch (err) {
          return '#';
        }
      },
      t(key) {
        return i18next.t(key);
      },
      // CAMBIO CLAVE: getMessages usa el 'reply' del argumento de forma segura
      getMessages() {
        if (reply && typeof reply.flash === 'function') {
          return reply.flash();
        }
        return {};
      },
      formatDate(date) {
        return date ? new Date(date).toLocaleString() : '';
      },
    };
  },
});
//5. RUTAS (Deben ir después de los plugins)
usersRoutes(app);
sessionsRoutes(app);
// registerStatusesRoutes(app);
// registerTasksRoutes(app);
// labelsRoutes(app);

app.get('/', { name: 'root' }, async (request, reply) => {
  return reply.view('index.pug'); 
});
// 6. ARRANQUE DEL SERVIDOR
const start = async () => {
  try {
    await app.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();