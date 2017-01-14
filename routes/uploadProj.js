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

////////////////////////////////    ROUTER GET   ///////////////////////////////

router.get('/', function(req, res, next){
  var query = [];
  var result = [];
  Project.find(function(err, project){
    if (err) { return next(err); }
    if (!project) { return next(new Error("can't find project!")); }


    for (var i = 0; i < project.length; i++) {
      query.push(project[i]._doc);
    }

  }).exec(function(){
      for(var i = 0; i < query.length; i++) {


        if (query[i].projCompany === 'elevation') {

          result.push(query[i]);

        }
      };
      res.send(result);
    }
  );

});
module.exports = router;






//  auth,

//
// var query = Project.findOne({projCompany:})
// Project.findOne(function(err, project){
//   if (err) { return next(err); }
//   if (!project) { return next(new Error("can't find project!")); }
//   console.log(project);
//   res.json(project);
// });
