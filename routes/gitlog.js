////////////////////////////////    REQUIRE   //////////////////////////////////

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var sa = require('superagent');

console.log("in gitlog route");

//////////////////////////////    ROUTER POST   /////////////////////////////////

router.post('/', function(req, res, next){
debugger;
  sa.post('https://github.com/login/oauth/access_token')
  .send({
    client_id: 'eea27bdfce0e49527b31',
    client_secret: '8cd28cfdfcfea91e492bc98f54723402bd853ed3',
    code:req.body.code
  })
  .end(function(err, res) {
    console.log(res);
  });


})





module.exports = router;
