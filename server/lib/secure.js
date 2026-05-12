import crypto from 'crypto';

// Usamos export const para que coincida con la importación { encrypt }
export const encrypt = (password) => crypto
  .createHash('sha256')
  .update(password)
  .digest('hex'); 