var sampleAlbums = [];
sampleAlbums.push({
             artistName: 'Ladyhawke',
             name: 'Ladyhawke',
             releaseDate: '2008, November 18',
             genres: [ 'new wave', 'indie rock', 'synth pop' ]
           });
sampleAlbums.push({
             artistName: 'The Knife',
             name: 'Silent Shout',
             releaseDate: '2006, February 17',
             genres: [ 'synth pop', 'electronica', 'experimental' ]
           });
sampleAlbums.push({
             artistName: 'Juno Reactor',
             name: 'Shango',
             releaseDate: '2000, October 9',
             genres: [ 'electronic', 'goa trance', 'tribal house' ]
           });
sampleAlbums.push({
             artistName: 'Philip Wesley',
             name: 'Dark Night of the Soul',
             releaseDate: '2008, September 12',
             genres: [ 'piano' ]
           });
/* end of hard-coded data */




$(document).ready(function() {
  console.log('app.js loaded!');
  $.get("http://localhost:3000/north.ejs").done(function(data) {
    let campSites = data;
    campSites.forEach(function(campSites) {
    renderCampsites(campSites);
   });
  });

$("form").on("submit", function(event) {
  event.preventDefault();
  var formData = $(this).serialize();
   $(this).trigger("reset");
  console.log(formData);

$.ajax({
  method: 'POST',
  url: '/north.ejs',
  dataType: 'json',
  data: formData,
  success: function(event){
    renderAlbum(event);
      }
    });
  });

$('#campsites').on('click', '.add-song', function(e) {
  console.log('asdfasdfasdf');
  var id= $(this).parents('.album').data('album-id');
  console.log('id',id);
  var currentAlbumId;
  $('#songModal').data('album-id', currentAlbumId).modal();

  // call this when the button on the modal is clicked
//********
 $('#saveSong').on('click', function handleNewSongSubmit(e) {
    console.log("adding new songs");
    e.preventDefault();

    var newSong = $('#songName').val();
    var track = $('#trackNumber').val();

    $.ajax({
      method: 'POST',
      url: 'api/albums/'+ id + '/songs',
      dataType: 'json',
      data: {
        name: newSong,
        trackNumber: track
      },
    success: function(event){
    $('#songModal').modal('hide');
    $('#trackNumber').val("");
    $('#songName').val("");
      }
    });
    // get data from modal fields
    // POST to SERVER
    // clear form
    // close modal
    // update the correct album to show the new song

    });
  });
});

// this function takes a single album and renders it to the page
function renderCampsites(CampSites) {
  console.log('rendering Campsite:', Campsite);

  var campsiteHtml =
  "        <!-- one campsite-->" +
  "        <div class='row album' data-album-id='" + campSites._id+ "'>" +
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
  "          <!-- end one album -->";
 
$("#campsites").append(campsiteHtml);

}
