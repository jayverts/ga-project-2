var mongoose = require('mongoose');

var CampSite = mongoose.Schema({
  local : {
    campsite : String,
    latitude : Number,
    longitude : Number,
    directions : String
	}
});

module.exports = mongoose.model('CampSite', CampSite);