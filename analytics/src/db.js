const { Pool } = require('pg')
const postgresOptions = require('../config/postgresql');

const pool = new Pool(postgresOptions);

module.exports = {
    postgres: (text, params, callback) => pool.query(text, params, callback)
}