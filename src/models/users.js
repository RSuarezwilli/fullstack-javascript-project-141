import { Model, snakeCaseMappers } from 'objection';
// Asegúrate de importar tu función de encriptación (ej. desde un utils o lib)
import { encrypt } from '../lib/secure.js'; 

export default class User extends Model {
  static get tableName() {
    return 'users';
  }

  // 1. Mapeo de nombres (snake_case en DB -> camelCase en JS)
  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  // 2. Esquema de validación (Lo que tenías atrapado en el segundo return)
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstName', 'lastName', 'email', 'password'],
      properties: {
        id: { type: 'integer' },
        firstName: { type: 'string', minLength: 1 },
        lastName: { type: 'string', minLength: 1 },
        email: { type: 'string', format: 'email' },
        password: { type: 'string', minLength: 3 },
      },
    };
  }

  // 3. Lógica de encriptación antes de guardar
  async $beforeInsert(queryContext) {
    await super.$beforeInsert(queryContext);
    if (this.password) {
      this.passwordDigest = encrypt(this.password);
    }
  }

  async $beforeUpdate(opt, queryContext) {
    await super.$beforeUpdate(opt, queryContext);
    if (this.password) {
      this.passwordDigest = encrypt(this.password);
    }
  }

  // Método para verificar la contraseña en el Login
  verifyPassword(password) {
    return this.passwordDigest === encrypt(password);
  }
}
