/////////////////////////////////   REQUIRE   //////////////////////////////////

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/projects');

var uploadProj = require('./routes/uploadProj');

//////////////////////////////   APP USE   /////////////////////////////////////s

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/placeholder', uploadProj);

app.get('/', function(req, res, next){
  res.sendFile('index.html');
});

app.post('/register', function(req, res, next){
  next("helloooooo handsome");
});




var port = process.env.PORT || '4000';

app.listen(port);
