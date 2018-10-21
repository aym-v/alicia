const { Router } = require('express');
const model = require('./event.model');

const router = new Router();


router.get('/ads/:id/events', async (req, res) => {
    try {
        const query = await model.selectAll(req.params.id);
        res.json(query);
    } catch (err) {
        res.status(500).end();
    }
});

module.exports = router