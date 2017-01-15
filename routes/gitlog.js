////////////////////////////////    REQUIRE   //////////////////////////////////

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var sa = require('superagent');
var request = require('request');

console.log("in gitlog route");

//////////////////////////////    ROUTER POST   /////////////////////////////////

router.post('/', function(req, res, next){
console.log("in gitload post request");
  sa.post('https://github.com/login/oauth/access_token')
  .send({
    client_id: 'eea27bdfce0e49527b31',
    client_secret: '8cd28cfdfcfea91e492bc98f54723402bd853ed3',
    code:req.body.code
  })
  .end(function(err, res) {
    console.log(res.body.access_token);
    var op = {
      url: 'https://api.github.com/user?access_token=' + res.body.access_token,
      headers: {'User-Agent': 'ProjectHunt'}
    }
    request(op, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }else{
        console.log("in else" + response.body);
      }
    })
  });
  res.json();
  })
//   router.get('/', function(req, res, next){
//     debugger;
//     request('https://api.github.com/user?access_token=' + res.body.access_token, function (error, response, body) {
//       if (!error && response.statusCode == 200) {
//         console.log(res);
//       }
//     })
// })





module.exports = router;
