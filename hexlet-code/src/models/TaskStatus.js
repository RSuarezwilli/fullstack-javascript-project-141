import { Model, snakeCaseMappers } from 'objection';

export default class TaskStatus extends Model {
  static get tableName() {
    return 'task_statuses';
  }

  // Esto convierte automáticamente snake_case de la DB a camelCase en JS
  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  // Esto es para la validación de datos (lo que tenías en el segundo return)
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1 },
      },
    };
  }
}