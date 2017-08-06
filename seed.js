var db = require("./models");

var sitesList =[];
sitesList.push({
	campsite: 'the Old Kanye',
	latitude: 'The College Dropout',
	longitude: '2004, February 10',
	directions:  'hip hop' 
});

sitesList.push({
	campsite: 'the Newish Kanye',
	latitude: 'The Life of Pablo',
	longitude: '2016, Febraury 14',
	directions: 'hip hop' 
});
sitesList.push({
	campsite: 'the always rude Kanye',
	latitude: 'My Beautiful Dark Twisted Fantasy',
	longitude: '2010, November 22',
	directions: 'hip hop'
});
sitesList.push({
	campsite: 'the sweet Kanye',
	latitude: '808s & Heartbreak',
	longitude: '2008, November 24',
	directions: 'synthpop'
});


db.CampSite.remove({}, function(err, campsites){

  db.CampSite.create(sitesList, function(err, campsites){
    if (err) { return console.log('ERROR', err); }
    process.exit();
  });
});