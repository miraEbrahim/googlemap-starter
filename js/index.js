let map;
// Create a new blank array for all the listing markers.
let markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'),
    {
        center: {lat: 40.7413549, lng: -73.9980244},
        zoom: 13
    });
    //marker for single location 
    // var fulham = {lat:51.4773, lng:0.2017};
    // var marker = new google.maps.Marker({
    //     position: fulham,
    //     map: map,
    //     title: "Fulham Marker"
    // });
    // var infowindow = new google.maps.InfoWindow({
    //     content:'info window content'
    // });
    // marker.addListener('click', function(){
    //     infowindow.open(map, marker);
    // })

    //for now i am hardcoding the places, later i will connect to db
    let locations = [
        {title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}},
        {title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
        {title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
        {title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
        {title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
        {title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}}
      ];
    let largeInfowindow = new google.maps.InfoWindow();
    let bounds = new google.maps.LatLngBounds();
    //the following group uses location array to create an array of markers on initialize
    for (let i = 0; i < locations.length; i++) {
        //get the position from the location array
        let position = locations[i].location;
        let title = locations[i].title;
        //create a marker per location and put into markers array
        var marker = new google.maps.Marker({
            map: map,
            position: position,
            title:title,
            animation: google.maps.Animation.DROP,
            id:i
    });
        //push the marker to our array of markers
        markers.push(marker);
        //create a onClick event to open an infowindow at each marker
        marker.addListener('click', function(){
            populateInfoWindow(this, largeInfowindow);
        });
        //Extends the boundries of the map for each marker
        bounds.extend(marker.position);
    }
    map.fitBounds(bounds);
}
        // This function populates the infowindow when the marker is clicked. We'll only allow
      // one infowindow which will open at the marker that is clicked, and populate based
      // on that markers position.
      function populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
          infowindow.marker = marker;
          infowindow.setContent('<div>' + marker.title + '</div>');
          infowindow.open(map, marker);
          // Make sure the marker property is cleared if the infowindow is closed.
          infowindow.addListener('closeclick',function(){
            infowindow.setMarker = null;
          });
    }
      }