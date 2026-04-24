export default (app) => {
  app
    .get('/session/new', { name: 'newSession' }, (req, reply) => {
      return reply.view('sessions/new.pug', { signInForm: {} });
    })
    .post('/session', { name: 'session' }, async (req, reply) => {
      const { data } = req.body;
      try {
        const user = await app.objection.models.user.query().findOne({ email: data.email });

        if (user && user.passwordDigest === data.password) {
          req.session.set('userId', user.id);
          req.flash('info', 'Bienvenido');
          return reply.redirect(app.reverse('root'));
        }

        req.flash('error', 'Email o contraseña incorrectos.');
        return reply.view('sessions/new.pug', { signInForm: data });
      } catch (err) {
        return reply.redirect(app.reverse('newSession'));
      }
    })
    .delete('/session', { name: 'deleteSession' }, (req, reply) => {
      req.session.delete();
      return reply.redirect(app.reverse('root'));
    });
};