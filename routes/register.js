////////////////////////////////    REQUIRE   //////////////////////////////////

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

console.log("in register route");

//////////////////////////////    ROUTER GET   /////////////////////////////////

router.get('/', function(req, res, next){
  if (err) { return next(err); }
  res.sendFile('index.html');
  });



module.exports = router;
