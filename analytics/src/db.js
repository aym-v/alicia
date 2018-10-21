const { Pool } = require('pg');
const elasticsearch = require('elasticsearch');
const postgresOptions = require('../config/postgresql');

const postgresPool = new Pool(postgresOptions);
const elasticClient = new elasticsearch.Client({ hosts: ["http://elasticsearch:9200"] })

module.exports = {
    postgres: (text, params, callback) => postgresPool.query(text, params, callback),
    elastic: query => elasticClient.search(query)
}