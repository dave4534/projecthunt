////////////////////////////////    REQUIRE   //////////////////////////////////

var mongoose = require("mongoose");

////////////////////////////////    SCHEMA   //////////////////////////////////

var Schema = mongoose.Schema;

var ProjSchema = new Schema ({
  projTitle: String,
  projCompany: String,
  projDescription: String, 
  langTags: [],
  projDueDate: Date,
  // companyRef: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }]
});

var Project = mongoose.model("Project", ProjSchema);

module.exports = Project;
