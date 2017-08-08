// var CampSites = require('../models/campSite');
var db = require('../models');

var siteGet = function(req, res) { //look at that controller
	res.render('north'); 
};

var sitePost = function(req, res) { //and look at that controller
	console.log("askldj");
	db.CampSite.create({local: {campsite: req.body.campsite, latitude: req.body.latitude, longitude: req.body.longitude, directions: req.body.directions}}, function(error, campSite) {
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