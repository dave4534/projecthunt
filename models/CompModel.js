////////////////////////////////    REQUIRE   //////////////////////////////////

var mongoose = require("mongoose");

////////////////////////////////    SCHEMA   //////////////////////////////////

var Schema = mongoose.Schema;

var CompanySchema = new Schema ({
  compName: Mixed,
  compBio:  Mixed,
  compLogo: String,
  compLocation: String 
});

var Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
