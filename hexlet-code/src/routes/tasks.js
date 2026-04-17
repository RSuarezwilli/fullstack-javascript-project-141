export default (app) => {
  app
    .get('/tasks', { name: 'tasks' }, async (req, reply) => {
      // Nota: req.query contiene los parámetros. Si en el Pug usas name="query[status]", 
      // Fastify lo parsea como un objeto anidado.
      const { query } = req.query;

      const tasksQuery = app.objection.models.task.query()
        .withGraphJoined('[status, executor, creator, labels]')
        .modify((qb) => {
          if (query?.status) {
            qb.where('statusId', query.status);
          }
          if (query?.executor) {
            qb.where('executorId', query.executor);
          }
          if (query?.label) {
            qb.whereExists(
              app.objection.models.task.relatedQuery('labels').where('labels.id', query.label)
            );
          }
          if (query?.isCreatorUser === 'on') {
            const currentUserId = req.session.get('userId');
            qb.where('creatorId', currentUserId);
          }
        });

      const [tasks, statuses, users, labels] = await Promise.all([
        tasksQuery,
        app.objection.models.taskStatus.query(),
        app.objection.models.user.query(),
        app.objection.models.label.query(),
      ]);

      return reply.view('tasks/index.pug', { tasks, statuses, users, labels, query });
    }) // Se eliminó el punto y coma extra aquí

    .post('/tasks', { name: 'createTask' }, async (req, reply) => {
      const { data } = req.body;
      
      // Manejo de etiquetas: convertir IDs a objetos para insertGraph
      const labelIds = [data.labels].flat().filter(Boolean);
      const labels = labelIds.map((id) => ({ id: Number(id) }));

      try {
        await app.objection.models.task.query().insertGraph({
          name: data.name,
          description: data.description,
          executorId: data.executorId ? Number(data.executorId) : null,
          statusId: Number(data.statusId),
          creatorId: Number(req.session.get('userId')),
          labels,
        }, { relate: true });

        req.flash('info', req.t('views.tasks.flash.create.success'));
        return reply.redirect(app.reverse('tasks'));
      } catch (err) {
        const statuses = await app.objection.models.taskStatus.query();
        const users = await app.objection.models.user.query();
        const allLabels = await app.objection.models.label.query();
        
        req.flash('error', req.t('views.tasks.flash.create.error'));
        return reply.view('tasks/new.pug', { 
          task: data, 
          statuses, 
          users, 
          labels: allLabels, 
          errors: err.data 
        });
      }
    })

    .patch('/tasks/:id', { name: 'updateTask' }, async (req, reply) => {
      const { data } = req.body;
      const { id } = req.params;
      
      const labelIds = [data.labels].flat().filter(Boolean);
      const labels = labelIds.map((lid) => ({ id: Number(lid) }));

      try {
        const task = await app.objection.models.task.query().findById(id);
        await task.$query().upsertGraph({
          ...data,
          id: Number(id),
          executorId: data.executorId ? Number(data.executorId) : null,
          statusId: Number(data.statusId),
          labels,
        }, { relate: true, unrelate: true });

        req.flash('info', req.t('views.tasks.flash.update.success'));
        return reply.redirect(app.reverse('tasks'));
      } catch (err) {
        req.flash('error', req.t('views.tasks.flash.update.error'));
        return reply.redirect(app.reverse('editTask', { id }));
      }
    })

    .delete('/tasks/:id', { name: 'deleteTask' }, async (req, reply) => {
      try {
        const { id } = req.params;
        const currentUserId = req.session.get('userId');
        const task = await app.objection.models.task.query().findById(id);

        // REQUISITO CRÍTICO: Solo el creador puede borrar la tarea
        if (!task || Number(task.creatorId) !== Number(currentUserId)) {
          req.flash('error', req.t('views.tasks.flash.delete.error'));
          return reply.redirect(app.reverse('tasks'));
        }

        await app.objection.models.task.query().deleteById(id);
        req.flash('info', req.t('views.tasks.flash.delete.success'));
      } catch (err) {
        req.flash('error', req.t('views.tasks.flash.delete.error'));
      }
      return reply.redirect(app.reverse('tasks'));
    });
};