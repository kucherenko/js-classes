// require the decache module:
var decache = require('decache');

var express = require('express')
    , cors = require('cors')
    , fs = require('fs')
    , app = express();

app.use(cors());

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.post('/timer', function (request, res, next) {
  var body = '', json, filePath;
  console.log('post timer' + request.body.id);
  console.log(request.body);
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
  console.log(request.body);
  console.log(json);
  fs.writeFile(filePath, JSON.stringify(json), function() {
    res.end();
  });
});

app.get('/timer/:id', function(req, res, next){
  console.log('get timer ' + req.params.id)
  var filePath = __dirname + '/data/' + req.params.id + '.json', data;
  try{
    decache(filePath);
    data = require(filePath);
  } catch(e) {
    res.status(404);
    data = {error: "Timer '" + req.params.id + "' is not found!"};
  }
  res.json(data);
});

app.delete('/timer/:id', function(req, res, next){
  console.log('clear timer ' + req.params.id)
  var json = [],
      filePath = __dirname + '/data/' + req.params.id + '.json';

  fs.writeFile(filePath, JSON.stringify(json), function() {
    res.end();
  });
});

app.listen(8080, function(){
  console.log('CORS-enabled web server listening on port 8080');
});