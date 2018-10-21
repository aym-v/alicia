const { Router } = require('express');
const model = require('./ad.model');

const router = new Router();

router.post('/ads', async (req, res) => {
    const { name, width, height } = req.body;
    try {
        const id = await model.create(name, width, height);
        res.json({id});
    } catch (err) {
        res.status(500).end();
    }
});

router.delete('/ads/:id', async (req, res) => {
    try {
        const query = await model.remove(req.params.id);
        res.json(query);
    } catch (err) {
        res.status(500).end();
    }
});

router.put('/ads/:id', async (req, res) => {
    const { name, width, height } = req.body;
    try {
        const query = await model.update(req.params.id, name, width, height);
        res.json(query);
    } catch (err) {
        res.status(500).end();
    }
});

module.exports = router