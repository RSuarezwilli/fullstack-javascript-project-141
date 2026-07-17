// __tests__/tasks.test.js
import {
  describe, beforeAll, it, expect, afterAll,
} from '@jest/globals';
import fastify from 'fastify';
import initApp from '../src/app.js'; // Ajusta esta ruta a donde esté tu archivo de inicio de app
import { prepareData } from './helpers/index.js'; // Tus utilidades de limpieza de DB

describe('Pruebas de Filtrado de Tareas', () => {
  let app;
  let cookie;

  beforeAll(async () => {
    app = await initApp(); // Inicializa Fastify
    const data = await prepareData(app); // Llena la DB con datos de prueba
    cookie = data.cookie; // Obtén la cookie de un usuario logueado
  });

  it('debería filtrar por estado', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/tasks',
      query: {
        'query[status]': '1', // ID de un estado que exista en tus semillas
      },
      cookies: cookie,
    });

    expect(response.statusCode).toBe(200);
    expect(response.payload).toContain('Texto de una tarea con ese estado');
  });

  it('debería mostrar solo mis tareas al marcar el checkbox', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/tasks',
      query: {
        'query[isCreatorUser]': 'on',
      },
      cookies: cookie,
    });

    expect(response.statusCode).toBe(200);
  });

  afterAll(async () => {
    if (app) {
      await app.close(); // Cierra la conexión de Fastify y DB
    }
  });
});
