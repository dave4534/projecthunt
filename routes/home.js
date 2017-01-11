////////////////////////////////    REQUIRE   //////////////////////////////////

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = require('../models/ProjModel');

console.log("in home route");

//////////////////////////////    ROUTER GET   /////////////////////////////////

router.get('/placeholder', function(req, res, next){
  Project.find(function(err, project){
    if (err) { return next(err); }
    if (!project) { return next(new Error("can't find project!")); }

    res.json(project);
  });
});


module.exports = router;
