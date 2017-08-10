// var CampSites = require('../models/campSite');
var db = require('../models');


var siteGet = function(req, res) { //look at that controller
	console.log("fuck");
	db.CampSite.find({}, function(err, campsites) {
		console.log(campsites);
		res.json(campsites); 
	});
};

var sitePost = function(req, res) { //and look at that controller
	console.log(req.body);
	//1 req body data
	//3data to create does not match the schema of the model
	db.CampSite.create({campsite: req.body.campsite, latitude: req.body.latitude, longitude: req.body.longitude, directions: req.body.directions, weather: req.body.weather}, function(error, campSite) {
		console.log(campSite);
		res.json(campSite);
	});
};
// function newSitePost(req,res) {
//   db.CampSite.create(req.body, function(err, campSite) {
//     console.log("working!!");
//     res.json(campSite);
//   });
// }

module.exports = {
	siteGet: siteGet,
	sitePost: sitePost
};