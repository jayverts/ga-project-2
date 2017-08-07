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

/* end of hard-coded data */




$(document).ready(function() {
  console.log('app.js loaded!');
  $.get("http://localhost:3000/north").done(function(data) {
    let campSites = data;
    campSites.forEach(function(campSites) {
    renderCampsites(campSites);
   console.log("loaded!");
   });
  });

$("form").on("submit", function(event) {
  event.preventDefault();
  var formData = $(this).serialize();
   $(this).trigger("reset");
  console.log("got data");

$.ajax({
  method: 'POST',
  url: '/north/campsites',
  dataType: 'json',
  data: formData,
  success: function(event){
    renderCampsites(event);
      console.log("POSTING!");
      }
    });
  });

$('#campsites').on('click', '.add-campsite', function(e) {
  console.log('asdfasdfasdf');
  var id= $(this).parents('.campsite').data('campsite-id');
  console.log('id',id);

  // call this when the button on the modal is clicked
//********

    // get data from modal fields
    // POST to SERVER
    // clear form
    // close modal
    // update the correct album to show the new song

    });
  });

// this function takes a single album and renders it to the page
function renderCampsites(CampSites) {
  console.log('rendering Campsite:', Campsite);

  var campsiteHtml =
  "        <!-- one campsite-->" +
  "        <div class='row campsite' data-campsite-id='" + campSites._id+ "'>" +
  "          <div class='col-md-10 col-md-offset-1'>" +
  "            <div class='panel panel-default'>" +
  "              <div class='panel-body'>" +
  "              <!-- begin album internal row -->" +
  "                <div class='row'>" +
  "                  <div class='col-md-3 col-xs-12 thumbnail album-art'>" +
  "                     <img src='" + "http://placehold.it/400x400'" +  " alt='album image'>" +
  "                  </div>" +
  "                  <div class='col-md-9 col-xs-12'>" +
  "                    <ul class='list-group'>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Campsite:</h4>" +
  "                        <span class='campsite'>" + campSites.campsite + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Latitude:</h4>" +
  "                        <span class='latitude'>" +  campSites.latitude + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Longitude:</h4>" +
  "                        <span class='longitude'>" + campSites.longitude + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Directions:</h4>" +
  "                        <span class='directions'>" + campSites.directions + "</span>" +
  "                      </li>" +
  "                    </ul>" +
  "                  </div>" +
  "                </div>" +
  "                <!-- end of album internal row -->" +

  "              </div>" + // end of panel-body

  "              <div class='panel-footer'>" +
  "              <button class='btn btn-primary add-campsite'>Add Campsite</button>" +
  "              </div>" +

  "            </div>" +
  "          </div>" +
  "          <!-- end one campsite -->";
 
$("#campsites").append(campsiteHtml);

}
