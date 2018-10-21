const db = require('../db');
const uuid = require('uuid/v4');

const create = async (name, width, height) => {
    const id = uuid();
    const query = await db.postgres('INSERT INTO ads(id, ad_name, width, height) VALUES ($1, $2, $3, $4)', [id, name, width, height]);
    return id
};

const remove = async id => {
    const query = await db.postgres('DELETE FROM ads WHERE id = $1', [id]);
    return query;
};

const update = async (id, name, width, height) => {
    const query = await db.postgres('UPDATE ads SET ad_name = $1, width = $2, height = $3 WHERE id = $4', [name, width, height, id]);
    return query
}

module.exports = {
    create,
    remove,
    update
}