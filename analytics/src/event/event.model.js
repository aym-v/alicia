const db = require('../db');

const selectAll = async id => {
    const result = await db.elastic({
        index: 'id',

    });

    return result
}

module.exports = {
    selectAll
}