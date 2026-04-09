import Fastify from 'fastify';
import view from '@fastify/view';
import pug from 'pug';
import i18next from 'i18next';
import path from 'path';
import { fileURLToPath } from 'url';
import { Model } from 'objection';
import Knex from 'knex';

// Importación de plugins y rutas
import fastifyCookie from '@fastify/cookie';
import fastifySession from '@fastify/session';
import fastifyFlash from '@fastify/flash';
import usersRoutes from './routes/users.js';
import knexConfig from '../knexfile.js';

// 1. CONFIGURACIÓN DE BASE DE DATOS (El "combustible")
const knex = Knex(knexConfig.development);
Model.knex(knex); // Conecta los modelos a la base de datos

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = Fastify({ logger: true });

// 2. INICIALIZAR TRADUCCIONES (i18next)
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

// 4. MOTOR DE PLANTILLAS (Pug)
app.register(view, {
  engine: {
    pug: pug,
  },
  root: path.join(__dirname, 'views'),
  defaultContext: {
    t: (key) => i18next.t(key),
    // Esto asegura que la variable "reply" esté disponible en el layout para el flash
    getMessages: (reply) => reply.flash(),
  },
});

// 5. RUTAS (Deben ir después de los plugins)
usersRoutes(app);

app.get('/', async (request, reply) => {
  // Cambia esto a 'index.pug' si moviste el archivo a la raíz de views
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