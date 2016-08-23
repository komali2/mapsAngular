angular.module('mapApp')
    .factory('mapFactory', ['searchFactory', (searchFactory)=>{
        var map;
        let api = {};
        var infoWindow;


        api.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        };

        api.createMarker = function(info, position){
            
            let marker = new google.maps.Marker({
                map: map,
                position: info.geometry.location,
                title: info.name
            });

            //set what the inside of the modal should look like
            marker.content = '<div class="infoWindowContent">' + info.types[0] + '</div>';

            //this allows the marker to be clicked and a modal opened
            google.maps.event.addListener(marker, 'click', ()=>{
                searchFactory.getDetails(info.place_id, (res)=>{
                    
                    let phone = '&#128222;';
                    phone = res.formatted_phone_number ? phone + ' ' + res.formatted_phone_number : '';

                    let address = '&#128204;';
                    address = res.formatted_address ? address + ' ' + res.formatted_address : '';

                    let website = '&#127760;';
                    website = res.website ? website + ' ' + res.website : '';

                    infoWindow.setContent(`<div class="info"><h2>${res.name}</h2><div class='phone'>${phone}</div><div class='address'>${address}</div><div class='website'><a href='${res.website}'>${website}</a></div></div>`);
                    infoWindow.open(map, marker);
                });
            });

            //return the marker for easy listing
            return marker;

        };
        
        api.init = function(mapElement, location){
            map = new google.maps.Map(mapElement, {
                center: location,
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
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

        $scope.map.addListener('bounds_changed', ()=>{
            $scope.$emit('changedLocation', $scope.map.getCenter());
        });
    }]);