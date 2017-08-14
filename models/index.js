var mongoose = require("mongoose");
// mongoose.connect(
// 	process.env.MONGODB_URI ||	
// 	process.env.MONGOLAB_URI ||
// 	process.env.MONGOHQ_URL ||
// 	"mongodb://localhost/project-2");

var User= require("./user");
var CampSite = require("./campSite");

module.exports.User = User;
module.exports.CampSite = CampSite;