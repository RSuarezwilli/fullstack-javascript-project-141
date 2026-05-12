export const up = (knex) => (
  knex.schema
    .createTable('labels', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('tasks_labels', (table) => {
      table.increments('id').primary();
      // Relación con tareas: si se borra la tarea, se borra la unión
      table.integer('task_id').references('id').inTable('tasks').onDelete('CASCADE');
      // Relación con etiquetas: RESTRICT impide borrar la etiqueta si tiene tareas
      table.integer('label_id').references('id').inTable('labels').onDelete('RESTRICT');
    })
);

export const down = (knex) => knex.schema.dropTable('tasks_labels').dropTable('labels');
