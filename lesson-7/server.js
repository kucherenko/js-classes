import fs from 'fs';
import express from 'express';

import bodyParser from 'body-parser';
import decache from 'decache';
import cors from 'cors';

const PORT = 8080;

let app = express();

app.use(cors());
app.use(bodyParser.json());       // to support JSON-encoded bodies

app.post('/timer', (request, response, next) => {
    let body = '',
        json,
        filePath;

    if (!request.body.id) {
        response.status(404);
        return response.json({error: 'ID not foun in body!'});
    }
    filePath = __dirname + '/data/' + request.body.id + '.json';
    try{
        decache(filePath);
        json = require(filePath);
    } catch (e) {
        json = [];
    }
    json = [].concat(json, request.body);
    fs.writeFile(filePath, JSON.stringify(json), function() {
        response.end();
    });
});

app.get('/timer/:id', (req, res, next) => {
    let filePath = __dirname + '/data/' + req.params.id + '.json',
        data;
    try{
        decache(filePath);
        data = require(filePath);
    } catch(e) {
        res.status(404);
        data = {error: "Timer '" + req.params.id + "' is not found!"};
    }
    res.json(data);
});

app.delete('/timer/:id', (req, res, next) => {
    let json = [],
        filePath = __dirname + '/data/' + req.params.id + '.json';
    fs.writeFile(filePath, JSON.stringify(json), () => res.end());
});

app.listen(PORT, () => console.log(`CORS-enabled web server listening on port ${PORT}`));