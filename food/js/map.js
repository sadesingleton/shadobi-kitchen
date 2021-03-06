if ($("#google-map").length) {
      function initialize() {
         var mapOptions = {
            zoom: 13.01,
            scrollwheel: false,
            styles: [
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.business",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                }
            ],
           
            center: new google.maps.LatLng(32.779167,-96.808891)
         };
         var map = new google.maps.Map(document.getElementById('google-map'),
            mapOptions);
         var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map
         });
      }
      google.maps.event.addDomListener(window, 'load', initialize);
}