angular.module('mapApp')
    .factory('mapFactory', [()=>{
        var map;
        let api = {};
        var infoWindow;

        api.mapOptions = {
            'SOMA': {
                zoom: 14,
                center: new google.maps.LatLng(37.779353, -122.398030),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            'ZENEFITS': {
                zoom: 4,
                center: new google.maps.LatLng(37.785394, -122.395406),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
        };

        api.createMarker = function(info){
            
            let marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(info.lat, info.long),
                title: info.title
            });

            //set what the inside of the modal should look like
            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

            //this allows the marker to be clicked and a modal opened
            google.maps.event.addListener(marker, 'click', ()=>{
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open(map, marker);
            });

            //return the marker for easy listing
            return marker;

        };
        
        api.init = function(mapElement, location){
            map = new google.maps.Map(mapElement, api.mapOptions[location]);
            infoWindow = new google.maps.InfoWindow();
            return map;
        };

        

        return api;
        
    }])
    .controller('mapController', ['$scope', 'mapFactory', ($scope, mapFactory)=>{
        
        
       

        //should have info.title, .desc, .lat, .long
        $scope.createMarker = function(info){
            $scope.markers.push(mapFactory.createMarker(info));
        };
        
    
        $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        };
    }]);