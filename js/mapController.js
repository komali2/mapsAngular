angular.module('mapApp')
    .controller('mapController', ['$scope', 'mapFactory', ($scope, mapFactory)=>{
        const cities = mapFactory.cities;
        $scope.map = new google.maps.Map(document.getElementById('map'), mapFactory.mapOptions);
        const service = new google.maps.places.PlacesService($scope.map);

        $scope.markers = [];
        
        var infoWindow = new google.maps.InfoWindow();
        
        $scope.createMarker = function (info){
            
            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.long),
                title: info.city
            });
            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
            
            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });
            
            $scope.markers.push(marker);
            
        }  
        
        for (var i = 0; i < cities.length; i++){
            $scope.createMarker(cities[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }
    }]);