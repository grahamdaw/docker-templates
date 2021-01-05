const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = {
    name: 'express-api',
    port: 8080,
    host: '0.0.0.0',
};

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('hello world');
});

app.listen(config.port, config.host, (e) => {
    if(e) {
        throw new Error('Internal Server Error');
    }
});
console.log(`Running on http://${config.host}:${config.port}`);