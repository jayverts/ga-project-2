var campSites = [];
campSites.push({
  campsite: 'Soap Creek Corral',
  latitude : 38.54702233,
  longitude: -107.3162093,
  directions: "Take U.S. Highway 50 to Colorado State Highway 92. Turn right on to Highway 92 travel 1 miles to County Road 721 (also called Forest Road #721). Turn right on Forest Road #721 and drive 7.25 miles to Forest Road #824. Turn right on to Forest Road #824 and travel 0.5 miles.",
   weather: {
        summary: "",
        icon: ""
    }
});
campSites.push({
  campsite: 'West Magnolia',
  latitude: 39.9504986117,
  longitude: -105.50440096800,
  directions: "From Nederland, head south on Colorado Highway 119 for 2.8 miles. Turn west onto County Road 132W. Limited parking is available just off of the highway, or continue one mile west and turn south through the second Forest Service gate to the main trailhead parking area.",
   weather: {
        summary: "",
        icon: ""
    }
});
campSites.push({
    campsite: 'Winiger Ridge',
    latitude: 39.9289926,
    longitude: -105.4412027,
    directions: "From Boulder, head west on Canyon Boulevard (Colorado Highway 119) to Magnolia Road (about 4.5 miles up from the mouth of the canyon). Turn south on Magnolia and follow it for 6.6 miles. Turn south on Boulder County Road 68 and follow it two miles to National Forest System Road (NFSR) 359. Turn south on NFSR 359",
     weather: {
        summary: "",
        icon: ""
    }
  });
campSites.push({
    campsite: 'Bill Moore Lake',
    latitude: 39.8047407,
    longitude: -105.7124468,
    directions: "I-70 westbound, take exit #232 US Hwy 40 to Empire. Turn right on Main St. (North Empire Road) and follow the County Road on to Forest Road 171.2.",
     weather: {
        summary: "",
        icon: ""
    }
  });

/* end of hard-coded data */




$(document).ready(function() {
  $.get("http://localhost:3000/north/campsites").done(function(data) {
    let campsites = data;
    campsites.forEach(function(campsite) {
    renderCampsite(campsite);
    console.log(campsite);
   });
  });

$("#north").on("submit", function(event) {
  event.preventDefault();
  var formData = $(this).serialize();
   $(this).trigger("reset");
  console.log(formData);

  $.ajax({
    method: 'POST',
    url: '/north/campsites',
    dataType: 'json',
    data: formData,
    success: function(campsite){
      renderCampsite(campsite);
      console.log(campsite);
    }
  });
});

$('#campsites').on('click', '.add-campsite', function(e) {
  console.log('asdfasdfasdf');
  // var id= $(this).parents('.campsite').data('campsite-id');
  // console.log('id',id);

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
function renderCampsite(campsite) {
  var campsiteHtml =
  "        <!-- one campsite-->" +
  // "        <div class='row campsite' data-campsite-id='" + Campsite._id+ "'>" +
  // "          <div class='col-md-10 col-md-offset-1'>" +
  // "            <div class='panel panel-default'>" +
  // "              <div class='panel-body'>" +
  "              <!-- begin album internal row -->" +
  "                <div class='row'>" +
  "                  <div class='col-md-3 col-xs-12 thumbnail album-art'>" +
  "                     <img src='" + "http://www.michaelarches.com/wp-content/uploads/Empire/Empire-Bill-Moore-Lake-5.jpg'" +  " alt='album image'>" +
  "                  </div>" +
  "                  <div class='col-md-9 col-xs-12'>" +
  "                    <ul class='list-group'>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Campsite:</h4>" +
  "                        <span class='campsite'>" + campsite.campsite + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Latitude:</h4>" +
  "                        <span class='latitude'>" +  campsite.latitude + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Longitude:</h4>" +
  "                        <span class='longitude'>" + campsite.longitude + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Directions:</h4>" +
  "                        <span class='directions'>" + campsite.directions + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Weather:</h4>" +
  "                        <span class='directions'>" + campsite.weather.summary + campsite.weather.icon + "</span>" +
  "                      </li>" +
  "                    </ul>" +
  "                  </div>" +
  "                </div>" +
  "                <!-- end of album internal row -->" +

  "              </div>" + // end of panel-body

  "            </div>" +
  "          </div>" +
  "          <!-- end one campsite -->";
 
$("#campsites").append(campsiteHtml);

}
