function initMap() {
    map = new google.maps.Map(document.getElementById('map'),
    {
        center: {lat: 51.5074, lng: 0.1278},
        zoom: 8
    });

    var fulham = {lat:51.4773, lng:0.2017};
    var marker = new google.maps.Marker({
        position: fulham,
        map: map,
        title: "Fulham Marker"
    });
    var infowindow = new google.maps.InfoWindow({
        content:'info window content'
    });
    marker.addListener('click', function(){
        infowindow.open(map, marker);
    })
}