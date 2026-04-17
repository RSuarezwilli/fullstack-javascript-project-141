export default (app) => {
  app
    .get('/statuses', { name: 'statuses' }, async (req, reply) => {
      const statuses = await app.objection.models.taskStatus.query();
      return reply.view('statuses/index.pug', { statuses });
    })
    .get('/statuses/new', { name: 'newStatus' }, (req, reply) => {
      return reply.view('statuses/new.pug', { status: {} });
    }) 
    // AGREGAMOS EL NOMBRE AQUÍ: 'createStatus'
    .post('/statuses', { name: 'createStatus' }, async (req, reply) => {
      try {
        const status = await app.objection.models.taskStatus.fromJson(req.body.data);
        await app.objection.models.taskStatus.query().insert(status);
        
        req.flash('info', 'Estado creado correctamente');
        return reply.redirect(app.reverse('statuses')); // Uso de reverse seguro
      } catch (err) {
        req.flash('error', 'Error al crear el estado');
        return reply.view('statuses/new.pug', { 
          status: req.body.data, 
          errors: err.data 
        });
      }
    });
};