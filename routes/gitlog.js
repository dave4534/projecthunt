////////////////////////////////    REQUIRE   //////////////////////////////////

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var sa = require('superagent');
var request = require('request');
var User = require('../models/DevModel');
mongoose.Promise = require('bluebird');

console.log("in gitlog route");
var a;
//////////////////////////////    ROUTER POST   /////////////////////////////////

router.post('/', function(req, res1, next){
console.log("in gitload post request");
  sa.post('https://github.com/login/oauth/access_token')
  .send({
    client_id: 'eea27bdfce0e49527b31',
    client_secret: '8cd28cfdfcfea91e492bc98f54723402bd853ed3',
    code:req.body.code
  })
  .end(function(err, res) {
    console.log(res.body.access_token);
    a = {devToken:res.body.access_token};
    var user = new User(a);
    var id = user._id;
    console.log(id.id);
    user.save(function(err, user){
      console.log('user saved!')
      if(err){ return next(err); }
      // debugger;
      console.log(user._id.id);
      
    });
    // debugger;
    // op = {
    //   url: 'https://api.github.com/user?access_token=' + res.body.access_token,
    //   headers: {'User-Agent': 'ProjectHunt'}
    // }
    // request(op, function(err, response, body){
    //       if (!err && response.statusCode == 200) {
    //         data = JSON.parse(body);
    //         console.log(data);
    //         res1.send(data);
    //       }
    //     })
      });
  })

  // router.get('/', function(req, res, next){

// })




module.exports = router;

// request(op, function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body);
//     a = JSON.parse(body);
//     console.log(response);
//     // debugger;
//   }else{
//     console.log("in else" + response.body);
//   }
// })
