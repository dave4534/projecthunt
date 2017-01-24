////////////////////////////////    REQUIRE   //////////////////////////////////

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = require('../models/ProjModel');
// var auth = jwt({secret: 'myLittleSecret'});

////////////////////////////////    ROUTER POST   //////////////////////////////
console.log("in upload route");
router.post('/createproject/:comp',function(req, res, next) {
  console.log(req.body);
  console.log(req.body.projCompany);
  var project = new Project(req.body);

  console.log("hello handsome ;) ");

  project.save(function(err, project){
    if(err){ return next(err); }

    res.json(project);
  });
});

////////////////////////////////    ROUTER GET   ///////////////////////////////

router.get('/:comp', function(req, res, next){
  console.log(req.param("comp"));
  var query = [];
  var result = [];
  Project.find(function(err, project){
    console.log(project);
    if (err) { return next(err); }
    if (!project) { return next(new Error("can't find project!")); }


    for (var i = 0; i < project.length; i++) {
      console.log(project[i]);
      console.log(project[i]._doc);
      query.push(project[i]._doc);

    }

  }).exec(function(){
      for(var i = 0; i < query.length; i++) {


        if (query[i].projCompany === req.param("comp")) {
          console.log(query);
          result.push(query[i]);

        }
      };
      console.log(query);
      res.json(result);
    }
  );

});

////////////////////////////////    ROUTER DELETE   ///////////////////////////////


router.delete('/:comp/:id',function(req, res, next) {
  console.log('in delete router!');
  console.log(req.param("comp"));
  // console.log(id);
  var result = [];
  console.log(req.params);
  // debugger;
  // var project = new Project(req.body);

  // console.log("hello handsome ;) ");

  // project.save(function(err, project){
  //   if(err){ return next(err); }

    res.json(req.params);
  // });
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
