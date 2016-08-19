angular.module('mapApp')
    .controller('mapController', ['$scope', 'mapFactory', ($scope, mapFactory)=>{
        
        $scope.center = 'SOMA';
        //$scope.map = new google.maps.Map(document.getElementById('map'), mapFactory.mapOptions[$scope.center]);
        $scope.map = mapFactory.init(document.getElementById('map'), $scope.center);
        //const service = new google.maps.places.PlacesService($scope.map);
        $scope.markers = [];
        $scope.createMarker = function(info){
            $scope.markers.push(mapFactory.createMarker(info));
        };
        
    
        $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        };
    }]);