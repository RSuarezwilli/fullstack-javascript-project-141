import User from '../models/users.js';

export default (app) => {
  app
    // Muestra el formulario de registro
    .get('/users/new', { name: 'newUser' }, (req, reply) => {
      const user = new User();
      // CAMBIO 1: Cambiamos .render por .view y añadimos la extensión .pug
      return reply.view('users/new.pug', { user });
    })
    // Recibe los datos del formulario (POST)
    .post('/users', async (req, reply) => {
      const userData = req.body.data; 
      try {
        const user = await User.fromJson(userData);
        await User.query().insert(user);
        
        // Nota: Asegúrate de tener configurado fastify-flash para usar req.flash
        return reply.redirect('/');
      } catch (err) {
        // CAMBIO 2: Cambiamos .render por .view y añadimos .pug
        return reply.view('users/new.pug', { user: userData, errors: err.data });
      }
    })
    // Lista de usuarios
    .get('/users', { name: 'users' }, async (req, reply) => {
      const users = await User.query();
      // CAMBIO 3: Cambiamos .render por .view y añadimos .pug
      return reply.view('users/index.pug', { users });
    });
};