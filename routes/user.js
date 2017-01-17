////////////////////////////////    REQUIRE   //////////////////////////////////

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/DevModel');

var dataForServer = [
  {
  projTitle: "proj1",
  projCompany: "elevation",
  projDescription: "make me a proj1",
  langTags: ["angular"],
  // projDueDate: Date
  },
  {
  projTitle: "proj2",
  projCompany: "jolt",
  projDescription: "make me a proj2",
  langTags: ["jQuery"],
  // projDueDate: Date
  },
  {
  projTitle: "proj3",
  projCompany: "bizzabo",
  projDescription: "make me a proj3",
  langTags: ["react"],
  // projDueDate: Date
  }
]
console.log("in user route");


//////////////////////////////    ROUTER GET   /////////////////////////////////

router.get('/', function(req, res, next){
  var x = dataForServer;
 // console.log(req.body);

 // Project.find(function(err, project){
 //   if (err) { return next(err); }
 //   if (!project) { return next(new Error("can't find project!")); }
 //   console.log(req.body.projCompany);
   res.json(x);
});


module.exports = router;
