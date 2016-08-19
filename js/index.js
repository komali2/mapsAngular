'use strict';

var app = angular.module('mapApp', [])

    
    .controller('mainController', [
        '$scope', 
        'mapFactory', 
        'searchFactory', 
        ($scope, mapFactory, searchFactory)=>{
            $scope.center = 'SOMA';
            $scope.location = new google.maps.LatLng(37.779353, -122.398030);
            $scope.markers = [];
            $scope.map = mapFactory.init(document.getElementById('map'), $scope.center);
            $scope.service = searchFactory.init($scope.map);

        }]);