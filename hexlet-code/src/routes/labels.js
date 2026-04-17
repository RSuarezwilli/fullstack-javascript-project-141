import Label from '../models/Label.js';

export default (app) => {
  app
    .get('/labels', { name: 'labels' }, async (req, reply) => {
      const labels = await Label.query();
      return reply.view('labels/index', { labels });
    })
    .get('/labels/new', { name: 'labels_new' }, async (req, reply) => {
      const label = new Label();
      return reply.view('labels/new', { label });
    })
    .get('/labels/:id/edit', { name: 'labels_edit' }, async (req, reply) => {
      const label = await Label.query().findById(req.params.id);
      return reply.view('labels/edit', { label });
    })
    .post('/labels', { name: 'labels_create' }, async (req, reply) => {
      try {
        // Asumiendo que los datos vienen en req.body.data según tu estándar
        const label = await Label.fromJson(req.body.data);
        await Label.query().insert(label);
        req.flash('info', 'Etiqueta creada con éxito');
        return reply.redirect(app.reverse('labels'));
      } catch ({ data }) {
        req.flash('error', 'Fallo al crear');
        return reply.view('labels/new', { label: req.body.data, errors: data });
      }
    })
    .patch('/labels/:id', { name: 'labels_update' }, async (req, reply) => {
      try {
        const { id } = req.params;
        const label = await Label.query().findById(id);
        await label.$query().patch(req.body.data);
        req.flash('info', 'Etiqueta actualizada correctamente');
        return reply.redirect(app.reverse('labels'));
      } catch ({ data }) {
        req.flash('error', 'Fallo al actualizar');
        const label = { ...req.body.data, id: req.params.id };
        return reply.view('labels/edit', { label, errors: data });
      }
    })
    .delete('/labels/:id', { name: 'labels_delete' }, async (req, reply) => {
      const { id } = req.params;
      const label = await Label.query().findById(id).withGraphFetched('tasks');

      if (label.tasks && label.tasks.length > 0) {
        req.flash('error', 'No se puede eliminar una etiqueta que tiene tareas asociadas');
        return reply.redirect(app.reverse('labels'));
      }

      await Label.query().deleteById(id);
      req.flash('info', 'Etiqueta eliminada con éxito');
      return reply.redirect(app.reverse('labels'));
    });
};