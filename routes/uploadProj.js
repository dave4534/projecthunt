////////////////////////////////    REQUIRE   //////////////////////////////////

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = require('../models/ProjModel');
// var auth = jwt({secret: 'myLittleSecret'});

////////////////////////////////    ROUTER POST   //////////////////////////////
console.log("in upload route");
router.post('/',function(req, res, next) {
  console.log(req.body.projCompany);
  var project = new Project(req.body);

  console.log("hello handsome ;) ");

  project.save(function(err, project){
    if(err){ return next(err); }

    res.json(project);
  });
});


router.get('/', function(req, res, next){

  // var query = Project.findOne({projCompany:})
  Project.findOne(function(err, project){
    if (err) { return next(err); }
    if (!project) { return next(new Error("can't find project!")); }
    console.log(project);
    res.json(project);
  });
});

module.exports = router;

//  auth,
