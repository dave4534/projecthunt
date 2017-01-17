////////////////////////////////    REQUIRE   //////////////////////////////////

var mongoose = require("mongoose");

////////////////////////////////    SCHEMA   //////////////////////////////////

var Schema = mongoose.Schema;

var UserSchema = new Schema ({
  devID: Schema.Types.Mixed,
  gitID: Schema.Types.Mixed,
  devFname: String,
  devLname: String,
  devTitle: String,
  devBio:  String,
  devPic: String,
  devToken: Schema.Types.Mixed,
  devProj: []
  // devProj: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }]
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
