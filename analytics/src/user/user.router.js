const { Router } = require('express');
const model = require('./user.model');

const router = new Router();

router.post('/user/register', async (req, res) => {
    const { user, password } = req.body;
    try {
        await model.create(user, password);
        res.json({user, password})
    } catch (err) {
        res.status(500).end()
    }
});

router.post('/user/login', async (req, res) => {
    const { user, password } = req.body;
    try {
        const token = await model.login(user, password);
        res.json(token)
    } catch (err) {
        res.status(500).end()
    } 
})

module.exports = router