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
  })
})
// =========== FUNCTIONS ==========================================================

// var input = document.getElementById('pac-input');
//         var searchBox = new google.maps.places.SearchBox(input);
//         map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

//         // Bias the SearchBox results towards current map's viewport.
//         map.addListener('bounds_changed', function() {
//            searchBox.setBounds(map.getBounds());
//          });

        // var markers = [];
        // // Listen for the event fired when the user selects a prediction and retrieve
        // // more details for that place.
        // searchBox.addListener('places_changed', function() {
        //   var places = searchBox.getPlaces();

        //   if (places.length == 0) {
        //     return;
        //   }

          // // Clear out the old markers.
          // markers.forEach(function(marker) {
          //   marker.setMap(null);
          // });

  //         markers = [];
  //          // For each place, get the icon, name and location.
  //         var bounds = new google.maps.LatLngBounds();
  //         places.forEach(function(place) {
  //           if (!place.geometry) {
  //             console.log("Returned place contains no geometry");
  //             return;
  //           }
  //           var icon = {
  //             url: place.icon,
  //             size: new google.maps.Size(71, 71),
  //             origin: new google.maps.Point(0, 0),
  //             anchor: new google.maps.Point(17, 34),
  //             scaledSize: new google.maps.Size(35, 35)
  //           };

  //           // Create a marker for each place.
  //           markers.push(new google.maps.Marker({
  //             map: map,
  //             icon: icon,
  //             title: place.name,
  //             position: place.geometry.location
  //           }));

  //                if (place.geometry.viewport) {
  //             // Only geocodes have viewport.
  //             bounds.union(place.geometry.viewport);
  //           } else {
  //             bounds.extend(place.geometry.location);
  //           }
  //         });
  //         map.fitBounds(bounds);
  //       });
  //   });
  // });

