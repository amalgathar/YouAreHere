var apiKey = 'key=AIzaSyAB6pgrU8w2KcZEpSwlRmldkyCIxrBl0ts';
  // var searchTerm = $("#searchTerm").val();
  var mapSearch;
  var addressSearch = "Salt Lake City";
  var map;
  var LatLng = (40.7774, 111.8882);
  var placeId = " ";
 // $.ajax({
 //      url: queryURL,
 //      method: 'GET'
 //    }).done(function(response) {
 //      console.log(response);
 //      var lat = response.results[0].geometry.location.lat;
 //      var lng = response.results[0].geometry.location.lng;
 //      var coordinates = {lat: lat , lng: lng};
 //      map = new google.maps.Map(document.getElementById('map'), {
 //          center: coordinates,
 //          zoom: 13
 //        });
 //    });
// =========== FUNCTIONS ==========================================================
  var geocoder;
  var map;
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(40.7774, 111.8882);
    var mapOptions = {
      zoom: 8,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
 
$("#search").on("click", function() {
  var searchTerm = $("#searchTerm").val();
  mapSearch = searchTerm;
  console.log(searchTerm);
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
  $.ajax({
    url: url,
    type:"GET",
    asysc: false,
    dataType: "json",
    success: function(data, status, jqXHR){
      console.log(data);
        var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + data[0] + "&" +apiKey;
      $.ajax({
      url: queryURL,
      method: 'GET'
      }).done(function(response) {
        console.log(response);
        var lat = response.results[0].geometry.location.lat;
        var lng = response.results[0].geometry.location.lng;
        var coordinates = {lat: lat , lng: lng};
        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 13
          });
    });
    }
  });
});