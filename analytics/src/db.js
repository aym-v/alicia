const { Pool } = require('pg')

const pool = new Pool({
    host: 'postgres',
    user: 'docker',
    password: 'docker',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    database: 'analytics'
});

module.exports = {
    postgres: (text, params, callback) => pool.query(text, params, callback)
}