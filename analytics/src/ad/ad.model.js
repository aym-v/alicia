const db = require('../db');
const uuid = require('uuid/v4');

const create = async (name, width, height) => {
    const query = await db.postgres('INSERT INTO ads(id, ad_name, width, height) VALUES ($1, $2, $3, $4)', [uuid(), name, width, height]);
    return query
}

module.exports = {
    create
}