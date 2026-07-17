import {
  describe, beforeAll, it, expect, afterAll,
} from '@jest/globals';
import initApp from '../src/app.js';

describe('Smoke Test', () => {
  let app;

  // Aumentamos el tiempo a 15 segundos para que no dé timeout mientras carga la DB
  beforeAll(async () => {
    app = await initApp();
  }, 15000);

  afterAll(async () => {
    // Verificamos que app exista antes de cerrar para evitar el TypeError
    if (app) {
      await app.close();
    }
  });

  it('La aplicación debería iniciar correctamente', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/',
    });
    expect(response.statusCode).toBe(200);
  });
});
