////////////////////////////////    REQUIRE   //////////////////////////////////

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var auth = jwt({secret: 'myLittleSecret'});
var Project = require('../models/ProjModel');

////////////////////////////////    ROUTER POST   //////////////////////////////
console.log("in routes");
router.post('/placeholder',function(req, res, next) {
  console.log(req.body);
  var project = new Project(req.body);

  console.log("hello handsome ;) ");

  project.save(function(err, project){
    if(err){ return next(err); }

    res.json(project);
  });
});

module.exports = router;

//  auth,
