// var CampSites = require('../models/campSite');
var db = require('../models');
var request = require('request');
var keysInfo = require('../env.js');

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
	var apiUrl = "https://api.darksky.net/forecast/" + keysInfo + "/" + req.body.latitude + "," + req.body.longitude;
  	request(apiUrl, function (error, response, body) {
		//Inside that callback
	    var weather = {
	    	summary: JSON.parse(body).hourly.summary,
	    	icon: JSON.parse(body).hourly.icon
	    };
	    console.log(weather);
		db.CampSite.create({campsite: req.body.campsite, latitude: req.body.latitude, longitude: req.body.longitude, directions: req.body.directions, weather: weather}, function(error, campSite) {
				console.log(campSite);
				res.json(campSite);
			});
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