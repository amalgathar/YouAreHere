$(document).on('click', '.searchButton', function() {
  $('#searches').empty();
  var type = $(this).data('type');
  var apiKey = 'key=AIzaSyAB6pgrU8w2KcZEpSwlRmldkyCIxrBl0ts'
  var queryURL = 'https://maps.googleapis.com/maps/api/js?' +apiKey+ "&callback=initMap" async defer;
 $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });


      // // function initMap() {
      //   var myLatLng = {lat: -25.363, lng: 131.044};

      //   // Create a map object and specify the DOM element for display.
      //   var map = new google.maps.Map(document.getElementById('map'), {
      //     center: myLatLng,
      //     zoom: 4
      //   });

      //   // Create a marker and set its position.
      //   var marker = new google.maps.Marker({
      //     map: map,
      //     position: myLatLng,
      //     title: 'Hello World!'
      //   });
      // }
