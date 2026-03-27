import fastify from 'fastify';

const app = fastify({ logger: true });

app.get('/', async () => {
  return 'Bienvenido a mi aplicación';
});

const start = async () => {
  try {
    await app.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' });
  } catch (err) {
    process.exit(1);
  }
};

start();