////////////////////////////////    REQUIRE   //////////////////////////////////

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = require('../models/ProjModel');

console.log("in home route");

//////////////////////////////    ROUTER GET   /////////////////////////////////

router.get('/', function(req, res, next){
 // console.log(req.body);
 Project.find(function(err, project){
   if (err) { return next(err); }
   if (!project) { return next(new Error("can't find project!")); }
   console.log(req.body.projCompany);
   res.json(project);
 });
});


module.exports = router;