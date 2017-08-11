var db = require("./models");


var sitesList =[];
sitesList.push({
	campsite: 'Soap Creek Corral',
    latitude: 38.54702233,
    longitude: -107.3162093,
    directions: "Take U.S. Highway 50 to Colorado State Highway 92. Turn right on to Highway 92 travel 1 miles to County Road 721 (also called Forest Road #721). Turn right on Forest Road #721 and drive 7.25 miles to Forest Road #824. Turn right on to Forest Road #824 and travel 0.5 miles.",
    weather: {
        summary: "",
        icon: ""

    }
});

sitesList.push({
	campsite: 'West Magnolia',
    latitude: 39.9504986117,
    longitude: -105.50440096800,
    directions: "From Nederland, head south on Colorado Highway 119 for 2.8 miles. Turn west onto County Road 132W. Limited parking is available just off of the highway, or continue one mile west and turn south through the second Forest Service gate to the main trailhead parking area.",
    weather: {
        summary: "",
        icon: ""
    }
});
sitesList.push({
	campsite: 'Winiger Ridge',
    latitude: 39.9289926,
    longitude: -105.4412027,
    directions: "From Boulder, head west on Canyon Boulevard (Colorado Highway 119) to Magnolia Road (about 4.5 miles up from the mouth of the canyon). Turn south on Magnolia and follow it for 6.6 miles. Turn south on Boulder County Road 68 and follow it two miles to National Forest System Road (NFSR) 359. Turn south on NFSR 359",
    weather: {
        summary: "",
        icon: ""
    }
});
sitesList.push({
	campsite: 'Bill Moore Lake',
    latitude: 39.8047407,
    longitude: -105.7124468,
    directions: "I-70 westbound, take exit #232 US Hwy 40 to Empire. Turn right on Main St. (North Empire Road) and follow the County Road on to Forest Road 171.2.",
    weather: {
        summary: "",
        icon: ""
    }
});


db.CampSite.remove({}, function(err, campsites){

db.CampSite.create(sitesList, function(err, campsites){
    if (err) { return console.log('ERROR', err); }
    console.log("seed working");
    process.exit();
  });
});