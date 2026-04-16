import User from '../models/users.js';

export default (app) => {
  app
    .get('/users/new', { name: 'newUser' }, (req, reply) => {
      const user = new User();
      return reply.view('users/new.pug', { user });
    })
    .post('/users', async (req, reply) => {
      const userData = req.body.data; 
      try {
        const user = await User.fromJson(userData);
        await User.query().insert(user);
        return reply.redirect('/');
      } catch (err) {
        return reply.view('users/new.pug', { user: userData, errors: err.data });
      }
    })
    .get('/users', { name: 'users' }, async (req, reply) => {
      const users = await User.query();
      return reply.view('users/index.pug', { users });
    });
}; // <--- ESTA LLAVE Y PUNTO Y COMA SON VITALES