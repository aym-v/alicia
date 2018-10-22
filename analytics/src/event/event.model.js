const db = require('../db');

const selectAll = async id => {
    const response = await db.elastic({
        "index": id,
        "size": 0,
        "body": {
            "aggs" : {
                "events" : {
                    "terms" : { "field" : "event",  "size" : 500 }
                }
            }
        }
    });
    return response.aggregations.events.buckets;
};

module.exports = {
    selectAll
}