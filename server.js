var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
// var ejs = require('ejs');

// mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/project-2');

app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser()); 

app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'Colorado Dispersed Camping' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

require('./config/passport')(passport);

app.use(function (req, res, next) {
	res.locals.currentUser = req.user;
    next();
});

var db = require("./models");

var campSites = [];
campSites.push({
  _id: 132,
  campsite: 'Soap Creek Corral',
  latitude : 38.54702233,
  longitude: -107.3162093,
  directions: "Take U.S. Highway 50 to Colorado State Highway 92. Turn right on to Highway 92 travel 1 miles to County Road 721 (also called Forest Road #721). Turn right on Forest Road #721 and drive 7.25 miles to Forest Road #824. Turn right on to Forest Road #824 and travel 0.5 miles."
});
campSites.push({
  _id: 133,
  campsite: 'West Magnolia',
  latitude: 39.9504986117,
  longitude: -105.50440096800,
  directions: "From Nederland, head south on Colorado Highway 119 for 2.8 miles. Turn west onto County Road 132W. Limited parking is available just off of the highway, or continue one mile west and turn south through the second Forest Service gate to the main trailhead parking area."
});
campSites.push({
    _id: 134,
    campsite: 'Winiger Ridge',
    latitude: 39.9289926,
    longitude: -105.4412027,
    directions: "From Boulder, head west on Canyon Boulevard (Colorado Highway 119) to Magnolia Road (about 4.5 miles up from the mouth of the canyon). Turn south on Magnolia and follow it for 6.6 miles. Turn south on Boulder County Road 68 and follow it two miles to National Forest System Road (NFSR) 359. Turn south on NFSR 359"
  });
campSites.push({
    _id: 135,
    campsite: 'Bill Moore Lake',
    latitude: 39.8047407,
    longitude: -105.7124468,
    directions: "I-70 westbound, take exit #232 US Hwy 40 to Empire. Turn right on Main St. (North Empire Road) and follow the County Road on to Forest Road 171.2."
  });

var routes = require('./config/routes');
app.use(routes);

// ejs.renderFile('./north.ejs', CampSite, function(err,str) {
//   html = str;
// });

// app.get('/', function homepage (req, res) {
//   res.sendFile(__dirname + '/views/index.ejs');
// console.log("getting homepage");
// });

// app.get('/north', function campsite_index(req, res){
//   app.use(routes);
//   db.CampSite.find({}, function(err,campSites) {
//   console.log("wow");
//   res.json(campSites);
//   });
// });

// app.post('/north/campsites', function newSitePost(req,res) {
//   app.use(routes);
//   db.CampSite.create(req.body, function(err, campSite) {
//     console.log("working!!");
//     res.json(campSite);
//   });
// });

app.listen(process.env.PORT || 3000);