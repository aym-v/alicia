const express = require('express');
const app = express();
const fs = require('fs');

app.get('/:adId/:event', (req, res) => {
    res.set('Content-Type', 'image/png');
    res.status(201).send(Buffer.from('789c636000020000050001'));
    const log = {
        id: req.params.adId,
        event: req.params.event,
        parameters: req.query
    };
    const stream = fs.createWriteStream('./logs/events.log', { flags: 'a' });
    stream.write(JSON.stringify(log) + '\n');
    stream.end();
});

app.listen(3000);