// require the decache module:
import decache from 'decache';
import express from 'express';
import cors from 'cors';
import fs from 'fs';

let app = express();
const PORT = 3000;

app.use(cors());

let bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.post('/timer', (request, res, next) => {
    let body = '', json, filePath;
    if (!request.body.id) {
        res.status(404);
        return res.json({error: 'ID not foun in body!'});
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
        res.end();
    });
});

app.get('/timer/:id', (req, res, next) => {
    let filePath = __dirname + '/data/' + req.params.id + '.json', data;
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