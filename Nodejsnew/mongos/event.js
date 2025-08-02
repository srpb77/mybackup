const express = require('express');
const EventEmitter = require('events');

const app = express();
const eventEmitter = new EventEmitter();

let count = 0;

eventEmitter.on('countApi', () => {
    count++;
    console.log('Event Called', count);
});

app.get('/', (req, res) => {
    res.send('API Called');
    eventEmitter.emit('countApi');
});

app.get('/search', (req, res) => {
    res.send('API Called');
    eventEmitter.emit('countApi');
});

app.get('/update', (req, res) => {
    res.send('API Called');
    eventEmitter.emit('countApi');
});

        app.listen(5000);