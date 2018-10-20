const uuidv4 = require('uuid/v4');
const { pbkdf2Sync } = require('crypto');
const jwt = require('jsonwebtoken');
const db = require('../db');
const { auth, token } = require('../../config/authentification');

const signToken = () => jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60) * 24,
}, token.secret);

const enryptPassword = (password, user) => pbkdf2Sync(password, `${auth.salt}+${user}`, auth.iterations, auth.byteLength, auth.alg).toString('hex');


const create = async (user, password) => {
    const id = uuidv4();
    const password_hash = enryptPassword(password, user);
    const query = await db.postgres('INSERT INTO users(id, username, password_hash) VALUES ($1, $2, $3)', [id, user, password_hash]);
    return query
}

const authenticate = async (user, password) => {
    const password_hash = enryptPassword(password, user);
    const query = await db.postgres('SELECT * FROM users WHERE username = $1', [user]);
    const auth = query.rows[0] && query.rows[0].password_hash === password_hash;
    if (auth) {
        const token = signToken();
        return { auth, token };
    } else {
        return { auth }
    }
}

const authorize = key => jwt.verify(key, token.secret);

module.exports = {
    create,
    authenticate,
    authorize
}