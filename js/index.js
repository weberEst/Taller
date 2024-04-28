function iniciarMap(){
    var coord = {lat: -33.0336892 , lng: -71.535759};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}
