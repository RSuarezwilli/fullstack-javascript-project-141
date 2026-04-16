export default (app) => {
  app
    .get('/tasks', { name: 'tasks' }, async (req, reply) => {
      const tasks = await app.objection.models.task.query()
        .withGraphJoined('[status, creator, executor]');
      return reply.view('tasks/index.pug', { tasks });
    })
    .get('/tasks/new', { name: 'newTask' }, async (req, reply) => {
      const users = await app.objection.models.user.query();
      const statuses = await app.objection.models.taskStatus.query();
      const currUserId = req.session.get('userId'); 

      return reply.view('tasks/new.pug', { 
        task: {}, 
        users, 
        statuses, 
        currUserId 
      });
    })
    .post('/tasks', async (req, reply) => {
      try {
        const { data } = req.body;
        const creatorId = req.session.get('userId'); 
        await app.objection.models.task.query().insert({ ...data, creatorId: Number(creatorId) });
        
        req.flash('info', 'Tarea creada correctamente');
        return reply.redirect('/tasks');
      } catch (err) {
        const users = await app.objection.models.user.query();
        const statuses = await app.objection.models.taskStatus.query();
        req.flash('error', 'Error al crear la tarea');
        return reply.view('tasks/new.pug', { 
          task: req.body.data, 
          users, 
          statuses, 
          errors: err.data 
        });
      }
    });
};