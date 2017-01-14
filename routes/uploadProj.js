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

////////////////////////////////    ROUTER param   ///////////////////////////////


router.param('company', function(req, res, next) {
  console.log("kasjgfijsgfkjsakfjjhsskfh");
  var query = [];
  var result = [];
  Project.find(function(err, project){
    if (err) { return next(err); }
    if (!project) { return next(new Error("can't find project!")); }


    for (var i = 0; i < project.length; i++) {
      query.push(project[i]._doc);
    }
    debugger;
  }).exec(function(err, company){
      for(var i = 0; i < query.length; i++) {

        console.log(req.company);
        if (query[i].projCompany === req.company) {

          result.push(query[i]);

        }
        req.company = company;
        return next();
      };

  //
  // var query = Post.findById(id);
  //
  // query.exec(function (err, post){
  //   if (err) { return next(err); }
  //   if (!post) { return next(new Error('can\'t find post')); }
  //
  //   req.company = company;
  //   return next();
  // });
});

////////////////////////////////    ROUTER GET   ///////////////////////////////

router.get('/:company', function(req, res, next){
  // var query = [];
  // var result = [];
  // Project.find(function(err, project){
  //   if (err) { return next(err); }
  //   if (!project) { return next(new Error("can't find project!")); }
  //
  //
  //   for (var i = 0; i < project.length; i++) {
  //     query.push(project[i]._doc);
  //   }
  //
  // }).exec(function(){
  //     for(var i = 0; i < query.length; i++) {
  //
  //       console.log(req.company);
  //       if (query[i].projCompany === req.company) {
  //
  //         result.push(query[i]);
  //
  //       }
  //     };
      res.send(req.company);
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
