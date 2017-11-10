var apiKey = 'key=AIzaSyAB6pgrU8w2KcZEpSwlRmldkyCIxrBl0ts';
  

 var config = {
    apiKey: "AIzaSyDGFy-pK3aErYV8Op5piaSHJOAwKyt0mms",
    authDomain: "youarehere-9043a.firebaseapp.com",
    databaseURL: "https://youarehere-9043a.firebaseio.com",
    projectId: "youarehere-9043a",
    storageBucket: "youarehere-9043a.appspot.com",
    messagingSenderId: "520576088730"
  };

  firebase.initializeApp(config);

  var database = firebase.database();
  
// =========== FUNCTIONS ==========================================================

  function initialize() {
    
    var origin = {lat: 40.7774, lng: -111.8882};
    var intialMap = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: origin
    });
  };
  
  // ==================================== Saving Firebase Input ============================================================

  $("#search").on("click", function(event) {
  event.preventDefault();

  // Grabs user inputs
  var travelLog = $("#searchTerm").val().trim();

  // Creates local "temporary" object for holding data
  var newDestination = {
    location: travelLog,
  };

  database.ref().push(newDestination);

 // ==================================== Saving Firebase Input ============================================================

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
        $("#factReturn").text(data[2][0]);
        $("#links").text(data[3][0]);
        console.log(data[2][0]);
        console.log(data[3][0]);
        var lat = response.results[0].geometry.location.lat;
        var lng = response.results[0].geometry.location.lng;
        var coordinates = {lat: lat , lng: lng};
        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 13
            // console.log(data[3])

        // $("#factReturn").text(data[2]); 


        });
      });
    }
  });
});

// =========== FUNCTIONS ==========================================================

    function initMap() {
        var sandyCampus = {lat: 40.569790, lng: -111.894628};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: sandyCampus
        });
        var marker = new google.maps.Marker({
          position: sandyCampus,
          map: map
        });
      }
