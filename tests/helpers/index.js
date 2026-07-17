// tests/helpers/index.js
export const prepareData = async (app) => {
  const { knex } = app.objection;

  // 1. Limpiamos las tablas para que no haya basura de tests anteriores
  await knex('tasks').truncate();
  await knex('statuses').truncate();
  await knex('users').truncate();

  // 2. Insertamos un usuario de prueba
  const [userId] = await knex('users').insert({
    first_name: 'Admin',
    last_name: 'Test',
    email: 'admin@test.com',
    password_digest: 'hash-falso', // En un test real usarías un hash de bcrypt
  });

  // 3. Insertamos estados de prueba
  const [statusId] = await knex('statuses').insert({ name: 'Nuevo' });

  // 4. Insertamos una tarea vinculada al usuario y al estado
  await knex('tasks').insert({
    name: 'Tarea de prueba',
    status_id: statusId,
    author_id: userId,
    executor_id: userId,
  });

  // 5. Simulamos una cookie de sesión para que el test crea que estamos logueados
  // Nota: Esto depende de cómo manejes las sesiones en tu app
  const response = await app.inject({
    method: 'POST',
    url: '/session',
    payload: {
      email: 'admin@test.com',
      password: 'password', // Asegúrate de que tu lógica de login permita esto
    },
  });

  const [sessionCookie] = response.cookies;
  return { cookie: sessionCookie };
};
