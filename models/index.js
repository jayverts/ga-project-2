var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project-2");

var User= require("./user");
var CampSite = require("./campSite");

module.exports.User = User;
module.exports.CampSite = CampSite;