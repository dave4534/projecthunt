////////////////////////////////    REQUIRE   //////////////////////////////////

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var sa = require('superagent');
var request = require('request');
var User = require('../models/DevModel');
mongoose.Promise = require('bluebird');
var crypto = require('crypto');


console.log("in gitlog route");

var cookieToken;

var hash = crypto.createHash('md5');
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

    cookieToken = res.body.access_token;
    // debugger;
    //NOT HERE!!!!!!!
    // op = {
    //   url: 'https://api.github.com/user?access_token=' + res.body.access_token,
    //   headers: {'User-Agent': 'ProjectHunt'}
    // }
    // request(op, function(err, response, body){
    //       if (!err && response.statusCode == 200) {
    //         data = JSON.parse(body);
    //         console.log(data);
    //         res1.send(data, cookieToken);
    //       }
    //     })


    //hashin the token
    hash.update(res.body.access_token, 'utf8');
    var hexHash = hash.digest("hex");
    console.log(hexHash);

    a = {
      devID:hexHash,
      devToken:res.body.access_token
    };
    console.log(a);
    // var user = new User(a);
    // user.save(function(err, user){
    //   console.log('user saved!')
    //   if(err){ return next(err); }
    //   // debugger;
    //   console.log(user);
    // });

    // debugger;
    op = {
      url: 'https://api.github.com/user?access_token=' + res.body.access_token,
      headers: {'User-Agent': 'ProjectHunt'}
    }
    request(op, function(err, response, body){
          if (!err && response.statusCode == 200) {
            data = JSON.parse(body);
            console.log(data);
            // console.log(a);
            var b = {
              'devID':a.devID,
              'devFname': data.login,
              'devBio':  data.bio,
              'devToken':a.devToken,
              'devPic': data.avatar_url,
              'gitID':data.id
            }
            // console.log(b);
            var user = new User (b);
          user.save(function(err, user){
            console.log('user saved!')
            if(err){ return next(err); }
            // debugger;
            console.log(user);
            // db.users.findOneAndUpdate({devID:a.devID},{
            //   'devFname': data.login,
            //   'devBio':  data.bio,
            //   'devPic': data.avatar_url,
            // });
            var secretUser = {
              'devID':a.devID,
              'devFname': data.login,
              'devBio':  data.bio,
              'devPic': data.avatar_url
              
            };
            console.log(secretUser);
            a = secretUser;

          })
      };
  })

      });
      res1.send(a);
  })

// router.param('id', function(req, res, next, id){
//   console.log('2');
// var hello =  User.findOne({gitID: id})
// req.hello = hello
//   console.log(id);
//   return next();
// })
//
//
//   router.get('/:id', function(req, res, next){
//     // debugger;
//     console.log(req.hello)
//     // res.json(res);
//     console.log('3');
//     res.end();
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
