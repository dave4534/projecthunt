////////////////////////////////    REQUIRE   //////////////////////////////////

var mongoose = require("mongoose");

////////////////////////////////    SCHEMA   //////////////////////////////////

var Schema = mongoose.Schema;

var DevSchema = new Schema ({
  devName: String,
  devLastName: String,
  devTitle: String,
  devBio:  Mixed,
  devPic: String,
});

var Developer = mongoose.model("Developer", DevSchema);

module.exports = Developer;
