const { Router } = require('express');
const model = require('./user.model');

const router = new Router();

router.post('/user/register', async (req, res) => {
    const { user, password } = req.body;
    try {
        await model.create(user, password);
        res.json({user, password})
    } catch (err) {
        console.log(err);
        res.status(500).end()
    }
});

module.exports = router