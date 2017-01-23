/////////////////////////////////   REQUIRE   //////////////////////////////////

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


//heroku version--------------------------------------
// mongoose.connect(process.env.MONGOLAB_MAROON_URI ||'mongodb://localhost/getprojecthunt');

//localhost version------------------------------------------------
mongoose.connect('mongodb://localhost/projects');
//comment for commit

var uploadProj = require('./routes/uploadProj');
var homeProj = require('./routes/home');
var login = require('./routes/login');
var register = require('./routes/register');
var gitlog = require('./routes/gitlog');
var user = require('./routes/login');


//////////////////////////////   APP USE   /////////////////////////////////////s

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//my auth middleware -> takes my projectHuntGenertedToken and returns access_token (if found)
//uploadProj - checks - do i have access_token? if i do -> perform user ajax request. else -> redirect to login
app.use('/dashboard',/*[my auth middlewawre]*/ uploadProj);
app.use('/home', homeProj);
app.use('/gitlog', gitlog);
app.use('/login', user);

app.use('/user', user);


app.get('/', function(req, res, next){
  res.sendFile('index.html');
});
// app.get('/user', [middlleware], function(req, res, next){
//   if !cookie -> login
//   else
// })
// app.post('/register', function(req, res, next){
//   next("helloooooo handsome");
// });


//comment to commit

app.listen(process.env.PORT || '4000');

// app.listen(port);
