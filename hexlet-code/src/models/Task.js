// import { Model } from 'objection';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export default class Task extends Model {
//   static get tableName() {
//     return 'tasks';
//   }

//   static get jsonSchema() {
//     return {
//       type: 'object',
//       required: ['name', 'statusId', 'creatorId'], // Campos obligatorios según el paso
//       properties: {
//         id: { type: 'integer' },
//         name: { type: 'string', minLength: 1 },
//         description: { type: 'string' },
//         statusId: { type: 'integer' },
//         creatorId: { type: 'integer' },
//         executorId: { type: ['integer', 'null'] },
//       },
//     };
//   }

//   // Esto es vital para que al pedir una tarea, Objection traiga al usuario y al estado automáticamente
//   static get relationMappings() {
//     return {
//       status: {
//         relation: Model.BelongsToOneRelation,
//         modelClass: path.join(__dirname, 'TaskStatus.js'),
//         join: { from: 'tasks.statusId', to: 'task_statuses.id' },
//       },
//       creator: {
//         relation: Model.BelongsToOneRelation,
//         modelClass: path.join(__dirname, 'User.js'),
//         join: { from: 'tasks.creatorId', to: 'users.id' },
//       },
//       executor: {
//         relation: Model.BelongsToOneRelation,
//         modelClass: path.join(__dirname, 'User.js'),
//         join: { from: 'tasks.executorId', to: 'users.id' },
//       },
//     };
//   }
// }

import { Model, snakeCaseMappers } from 'objection';
import User from './users.js'; // Asegúrate que el nombre coincida (users.js o User.js)
import TaskStatus from './TaskStatus.js';

export default class Task extends Model {
  static get tableName() {
    return 'tasks';
  }
  
static get columnNameMappers() {
    return snakeCaseMappers();
  }

  static get relationMappings() {
    return {

      // Dentro de Task.js, añade a relationMappings:
labels: {
  relation: Model.ManyToManyRelation,
  modelClass: path.join(__dirname, 'Label.js'),
  join: {
    from: 'tasks.id',
    through: {
      from: 'tasks_labels.task_id',
      to: 'tasks_labels.label_id',
    },
    to: 'labels.id',
  },
},

      status: {
        relation: Model.BelongsToOneRelation,
        modelClass: TaskStatus,
        join: { from: 'tasks.status_id', to: 'task_statuses.id' }, // Usa guion bajo aquí
      },
      creator: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: { from: 'tasks.creator_id', to: 'users.id' }, // Usa guion bajo aquí
      },
      executor: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: { from: 'tasks.executor_id', to: 'users.id' }, // Usa guion bajo aquí
      },
    };
  }
  
  }
