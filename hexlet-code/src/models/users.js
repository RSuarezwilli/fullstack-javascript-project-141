// src/models/User.js
import { Model } from 'objection';
import encrypt from '../lib/secure.js'; 

export default class User extends Model {
  static get tableName() {
    return 'users';
  }

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

  async $beforeInsert(queryContext) {
    await super.$beforeInsert(queryContext);
    this.passwordDigest = encrypt(this.password);
    // Opcional: eliminar el password en plano para que no se guarde
    delete this.password; 
  }

  async $beforeUpdate(opt, queryContext) {
    await super.$beforeUpdate(opt, queryContext);
    if (this.password) {
      this.passwordDigest = encrypt(this.password);
      delete this.password;
    }
  }
  // Esto convierte la clave plana en un hash antes de guardarla
  set password(value) {
    this.passwordDigest = encrypt(value);
  }

verifyPassword(password) {
    return this.passwordDigest === encrypt(password);
  }

}