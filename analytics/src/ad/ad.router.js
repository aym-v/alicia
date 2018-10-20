const { Router } = require('express');
const model = require('./ad.model');

const router = new Router();

router.post('/ads', async (req, res) => {
    const { name, width, height } = req.body;
    try {
        await model.create(name, width, height);
        res.status(200).end();
    } catch (err) {
        res.status(500).end();
    }

});

module.exports = router