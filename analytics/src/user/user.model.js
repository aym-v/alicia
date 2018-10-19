const uuidv4 = require('uuid/v4');
const { pbkdf2Sync } = require('crypto');
const db = require('../db');
const { auth } = require('../../config/authentification');

const create = async (user, password) => {
    const id = uuidv4();
    const password_hash = pbkdf2Sync(password, `${auth.salt}+${user}`, auth.iterations, auth.byteLength, auth.alg).toString('hex');
    const result = await db.postgres('INSERT INTO users(id, username, password_hash) VALUES ($1, $2, $3)', [id, user, password_hash]);
    return result
}

module.exports = {
    create
}