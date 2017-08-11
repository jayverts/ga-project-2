var mongoose = require('mongoose');

var CampSite = mongoose.Schema({
    campsite : String,
    latitude : Number,
    longitude : Number,
    directions : String,
    weather: {
    	summary: String,
    	icon: String
    }
});

module.exports = mongoose.model('CampSite', CampSite);