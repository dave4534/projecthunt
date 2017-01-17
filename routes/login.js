////////////////////////////////    REQUIRE   //////////////////////////////////

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/DevModel');
mongoose.Promise = require('bluebird');



console.log("in login route");

//////////////////////////////    ROUTER GET   /////////////////////////////////

router.get('/', function(req, res, next){
  if (err) { return next(err); }
  res.sendFile('index.html');
  });



// ////////////////////////////////    ROUTER POST   //////////////////////////////
// console.log("in user post");
// // debugger;
// router.post('/',function(req, res, next) {
//   console.log(req.body);
//   var user = new User(req.body);
//   console.log(user);
//   console.log("hello handsome ;) ");

//   user.save(function(err, user){
//   	console.log('user saved!')
//     if(err){ return next(err); }
//     console.log(user);
//     res.json(user);
//   });
// });




module.exports = router;
