var keysInfo = require('./env.js');
var request = require('request');

function get(forecast) {
  var apiUrl = "https://api.darksky.net/forecast/" + keysInfo + "/" + latitude + "," + longitude;
  request(apiUrl, function (error, response, body) {
	//Inside that callback
	console.log(JSON.parse(body));
	});
}
// 
// get("nothing");
//exporting the "get" function
module.exports = get;
