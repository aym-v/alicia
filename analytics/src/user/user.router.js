const { Router } = require('express');
const model = require('./user.model');

const router = new Router();

router.post('/user/register', async (req, res) => {
    const { user, password, secret } = req.body;
    try {
        if (secret === process.env.REGISTER_SECRET) {
            await model.create(user, password);
            res.json({user, password})
        } else {
            throw new Error('Wrong register secret')
        }
    } catch (err) {
        res.status(500).end()
    }
});

router.post('/user/authenticate', async (req, res) => {
    const { user, password } = req.body;
    try {
        const auth = await model.authenticate(user, password);
        res.json(auth);
    } catch (err) {
        res.status(500).end()
    }
});

module.exports = router