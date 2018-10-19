const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routers = [
    require('./user/user.router')
];

app.use(bodyParser.json());
app.use('/', routers[0]);

app.listen(3000);
