const express = require("express");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken'); 
const app = express();
const routers = [
    require('./user/user.router'),
    require('./ad/ad.router')
];

app.use(bodyParser.json());
app.use((req, res, next) => {
    if (req.originalUrl === '/user/register' || req.originalUrl === '/user/authenticate') {
        return next();
    } else if (!req.headers.authorization) {
        return res.status(403).end();
    } else if (jwt.verify(req.headers.authorization, '043A718774C572BD8A25ADBEB1BFCD5C0256AE11CECF9F9C3F925D0E52BEAF89')) {
        next();
    } else {
        return res.status(403).end();
    }
    
});
app.use('/', routers[0]);
app.use('/', routers[1]);
app.get('/hello',(req, res)=>res.send('he'))

app.listen(3000);