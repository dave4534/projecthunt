////////////////////////////////    REQUIRE   //////////////////////////////////

var mongoose = require("mongoose");

////////////////////////////////    SCHEMA   //////////////////////////////////

var Schema = mongoose.Schema;

var ProjSchema = new Schema ({
  projTitle: String,
  projDescription: Mixed,
  projLanguage: String,
  projDoDate: Date,
  projComp: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }]
});

var Project = mongoose.model("Project", ProjSchema);

module.exports = Project;
