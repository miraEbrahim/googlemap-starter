let map;
// Create a new blank array for all the listing markers.
let markers = [];

function initMap() {
  //create a map style array
  let mapDarkStyle =   [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#6b9a76'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}]
    }
  ];
  //constructor creates a new map -only center and zoom are requested
    map = new google.maps.Map(document.getElementById('map'),
    {
      center: {lat: 40.7413549, lng: -73.9980244},
      zoom: 13,
      styles: mapDarkStyle,
      mapTypeControl: false
    });
    

    //for now i am hardcoding the places, later i will connect to db
    let locations = [
      {
        id: '4c7cc27e3e90a1cdfb5243be',
        title: 'Cafe Milano',
        type: 'Cafe',
        location: {
          lat: 51.46099454945425,
          lng: -0.21752025208051115
        },
        streetAddress: '204 Upper Richmond Rd',
        city: 'London ',
        zipCode: 'SW15 6TD',
        mapDirection:
          "<a href='https://goo.gl/maps/RfogWdvZ89K2'>Get Directions</a>",
        imageURL: "<a href='https://goo.gl/maps/jHmUDqUb6U92'></a>",
        extraInfo: ''
      },
      {
        id: '4c78016e97028cfa4e4dd6fe',
        title: 'Cafe Nunu',
        type: 'Cafe',
        location: {
          lat: 51.46791804300835,
          lng: -0.20908542453073797
        },
        streetAddress: '6A Ranelagh Gardens',
        city: 'London ',
        zipCode: 'SW6 3UB',
        mapDirection:
          "<a href='https://goo.gl/maps/RdeLb7nT2K22'>Get Directions</a>",
        imageURL: "<a href='https://goo.gl/maps/qvkq4qBN5tn'></a>",
        extraInfo: ''
      },
      {
        id: '4b9fe98af964a520d54937e3',
        title: 'Cafe Nero',
        type: 'Cafe',
        location: {
          lat: 51.459819,
          lng: -0.211806
        },
        streetAddress: '112 Upper Richmond Rd',
        city: 'London ',
        zipCode: 'SW15 2SP',
        mapDirection:
          "<a href='https://goo.gl/maps/KcLqQqLvxh52'>Get Directions</a>",
        imageURL: "<a href='https://goo.gl/maps/WkqxF1wFLev'></a>",
        extraInfo: ''
      },
      {
        id: '559b959f498e191eb0698efa',
        title: 'Costa Coffee',
        type: 'Cafe',
        location:{
        lat: 51.465003,
        lng: -0.214407
        },
        streetAddress: '26 Putney High St',
        city: 'London ',
        zipCode: 'SW15 1SN',
        mapDirection:
          "<a href='https://goo.gl/maps/vazMns9n5DP2'>Get Directions</a>",
        imageURL: "<a href='https://goo.gl/maps/rzBvABMoi4A2'></a>",
        extraInfo: ''
      },
      {
        id: '4ebf15afd5fb50d70f350c59',
        title: 'Artisan Coffee',
        type: 'Cafe',
        location: {
          lat: 51.461226,
          lng: -0.219454
        },
        streetAddress: '203 Upper Richmond Rd',
        city: 'London ',
        zipCode: 'SW15 6SG',
        mapDirection:
          "<a href='https://goo.gl/maps/U44bLMrbN9w'>Get Directions</a>",
        imageURL: "<a href='https://goo.gl/maps/j2JVhZKQz9n'></a>",
        extraInfo: ''
      },
      {
        id: '4fd09d28e4b0da17b03a3264',
        title: 'Cafe Parisienne',
        type: 'Cafe',
        location: {
          lat: 51.461578711507386,
          lng: -0.22001220017854142
        },
        streetAddress: '225 Lavender Hill',
        city: 'London ',
        zipCode: 'SW11 1JR',
        mapDirection:
          "<a href='https://goo.gl/maps/x3L46FgDAC92'>Get Directions</a>",
        URL: `https://goo.gl/maps/jHmUDqUb6U92`,
        extraInfo: ''
      },
      {
        id: '4b546704f964a520f8b927e3',
        title: 'Ground Coffee Society',
        type: 'Cafe',
        location: {
          lat: 51.467227,
          lng: -0.219392
        },
        streetAddress: '79 Lower Richmond Rd',
        city: 'London ',
        zipCode: 'SW15 1ET',
        mapDirection:
          "<a href='https://goo.gl/maps/wfSwoMqmZ4F2'>Get Directions</a>",
        URL: 'https://goo.gl/maps/1RfcDSRoiw82',
        extraInfo: ''
      }
    ]
    
    
    // Style the markers a bit. This will be our listing marker icon.
    // var defaultIcon = makeMarkerIcon('0091ff');
    // Create a "highlighted location" marker color for when the user
    // mouses over the marker.
    // var highlightedIcon = makeMarkerIcon('FFFF24');
    let largeInfowindow = new google.maps.InfoWindow();
    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations.length; i++) {
      // Get the position from the location array.
      var position = locations[i].location;
      var title = locations[i].title;
      // Create a marker per location, and put into markers array.
      var marker = new google.maps.Marker({
        
        position: position,
        title: title,
        animation: google.maps.Animation.DROP,
        id: i
      });
      // Push the marker to our array of markers.
      markers.push(marker);
      // Create an onclick event to open the large infowindow at each marker.
      marker.addListener('click', function() {
        populateInfoWindow(this, largeInfowindow);
      });
      // Two event listeners - one for mouseover, one for mouseout,
      // to change the colors back and forth.
      // marker.addListener('mouseover', function() {
      //   this.setIcon(highlightedIcon);
      // });
      // marker.addListener('mouseout', function() {
      //   this.setIcon(defaultIcon);
      // });
    }
    document.getElementById('show-places').addEventListener('click', showPlaces);
    document.getElementById('hide-places').addEventListener('click', hidePlaces);
  
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
      infowindow.addListener('closeclick', function() {
        infowindow.marker = null;
      });
    }
  }
  // This function will loop through the markers array and display them all.
  function showPlaces() {
    var bounds = new google.maps.LatLngBounds();
    // Extend the boundaries of the map for each marker and display the marker
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
      bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);
  }
  // This function will loop through the listings and hide them all.
  function hidePlaces() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
  }}