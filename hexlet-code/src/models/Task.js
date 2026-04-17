import { Model, snakeCaseMappers } from 'objection';
import User from './users.js'; // Asegúrate que el nombre coincida (users.js o User.js)
import TaskStatus from './TaskStatus.js';
import Label from './Label.js';

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
  modelClass: Label,
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
