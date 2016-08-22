angular.module('mapApp')
    .factory('mapFactory', ['searchFactory', (searchFactory)=>{
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

        api.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        };

        api.createMarker = function(info, position){
            
            let marker = new google.maps.Marker({
                map: map,
                position: info.geometry.location,
                title: info.name,
                icon: {
                    url: 'http://maps.gstatic.com/mapfiles/circle.png',
                    anchor: new google.maps.Point(10, 10),
                    scaledSize: new google.maps.Size(10, 17)
                }
            });

            //set what the inside of the modal should look like
            marker.content = '<div class="infoWindowContent">' + info.types[0] + '</div>';

            //this allows the marker to be clicked and a modal opened
            google.maps.event.addListener(marker, 'click', ()=>{
                searchFactory.getDetails(info.place_id, (res)=>{
                    
                    let phone = res.formatted_phone_number ? res.formatted_phone_number : '';
                    let address = res.formatted_address ? res.formatted_address : '';
                    infoWindow.setContent(`<div class="info"><h2>${res.name}</h2><div class='phone'>${phone}</div><div class='address'>${address}</div><div class='website'>${res.website}</div></div>`);
                    infoWindow.open(map, marker);
                });
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
        
            
        $scope.$watch('searchData.results', (newVal, oldVal)=>{
            newVal.forEach((el)=>{
                $scope.markers.push(mapFactory.createMarker(el));
            });
        });

        //should have info.title, .desc, .lat, .long
        $scope.createMarker = function(info){
            $scope.markers.push(mapFactory.createMarker(info));
        };
        
    
        $scope.openInfoWindow = function(e, selectedMarker){
            mapFactory.openInfoWindow(e, selectedMarker);
        };
    }]);