////////////////////////////////    REQUIRE   //////////////////////////////////

var mongoose = require("mongoose");

////////////////////////////////    SCHEMA   //////////////////////////////////

var Schema = mongoose.Schema;

var CompanySchema = new Schema ({
  compName: Mixed,
  compBio:  Mixed,
  compLogo: String,
  compProj: [{ type: mongoose.Schema.Types.ObjectId, ref: "Projects" }]
});

var Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
