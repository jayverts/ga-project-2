var db = require("./models");

var sitesList =[];
sitesList.push({
	campsite: 'Bill Moore Lake',
    latitude: 39.8047407,
    longitude: -105.7124468,
    directions: "I-70 westbound, take exit #232 US Hwy 40 to Empire. Turn right on Main St. (North Empire Road) and follow the County Road on to Forest Road 171.2."
});

sitesList.push({
	campsite: 'Bill Moore Lake',
    latitude: 39.8047407,
    longitude: -105.7124468,
    directions: "I-70 westbound, take exit #232 US Hwy 40 to Empire. Turn right on Main St. (North Empire Road) and follow the County Road on to Forest Road 171.2."
});
sitesList.push({
	campsite: 'Bill Moore Lake',
    latitude: 39.8047407,
    longitude: -105.7124468,
    directions: "I-70 westbound, take exit #232 US Hwy 40 to Empire. Turn right on Main St. (North Empire Road) and follow the County Road on to Forest Road 171.2."
});
sitesList.push({
	campsite: 'Bill Moore Lake',
    latitude: 39.8047407,
    longitude: -105.7124468,
    directions: "I-70 westbound, take exit #232 US Hwy 40 to Empire. Turn right on Main St. (North Empire Road) and follow the County Road on to Forest Road 171.2."
});
sitesList.push({
    campsite: 'Bill Moore Lake',
    latitude: 39.8047407,
    longitude: -105.7124468,
    directions: "I-70 westbound, take exit #232 US Hwy 40 to Empire. Turn right on Main St. (North Empire Road) and follow the County Road on to Forest Road 171.2."
});



db.CampSite.remove({}, function(err, campsites){

db.CampSite.create(sitesList, function(err, campsites){
    if (err) { return console.log('ERROR', err); }
    console.log("seed working");
    process.exit();
  });
});