import Fastify from 'fastify';
import view from '@fastify/view';
import pug from 'pug';
import i18next from 'i18next';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Configuración de rutas (Para que el servidor encuentre tus carpetas)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = Fastify({ logger: true });

// 2. PASO: Inicializar i18next (El traductor)
// ¿Para qué?: Para centralizar todos los textos como pide el proyecto.
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

// 3. PASO: Registrar el motor de plantillas (El dibujante)
// ¿Para qué?: Para que el servidor "dibuje" el HTML usando archivos .pug
app.register(view, {
  engine: {
    pug: pug,
  },
  root: path.join(__dirname, 'views'), // Aquí buscará tus archivos .pug
  defaultContext: {
    t: (key) => i18next.t(key), // Esto permite usar t('key') en el HTML
  },
});

// 4. PASO: Cambiar la ruta principal
// ¿Para qué?: Antes enviabas un texto, ahora enviarás una VISTA completa.
app.get('/', async (request, reply) => {
  // .view('index.pug') busca el archivo en la carpeta 'src/views'
  return reply.view('index.pug');
});

const start = async () => {
  try {
    // Nota: host '0.0.0.0' es vital para que funcione en Render
    await app.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();