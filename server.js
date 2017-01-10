/////////////////////////////////   REQUIRE   //////////////////////////////////

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/projects");

//////////////////////////////////    APP USE   ////////////////////////////////////

app.use(express.static("public"));
app.use(express.static("node_modules"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var port = process.env.PORT || '4000';

app.listen(port);
