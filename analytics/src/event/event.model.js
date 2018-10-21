const db = require('../db');

const selectAll = async id => await db.elastic({
    index: 'id'
});

module.exports = {
    selectAll
}