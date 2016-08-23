'use strict';

var app = angular.module('mapApp', ['ngAnimate'])

    
    .controller('mainController', [
        '$scope', 
        'mapFactory', 
        'searchFactory', 
        ($scope, mapFactory, searchFactory)=>{
            $scope.center = new google.maps.LatLng(37.779353, -122.398030);
            $scope.location = new google.maps.LatLng(37.779353, -122.398030);
            $scope.markers = [];
            $scope.map = mapFactory.init(document.getElementById('map'), $scope.center);
            $scope.service = searchFactory.init($scope.map);
            $scope.searchData = {results:[]};

            $scope.$on('changedLocation', (event, location)=>{
                $scope.location = location;
                $scope.$apply();
            });

            $scope.$on('search', ()=>{
                for(var i = 0; i < $scope.markers.length; i++){
                    $scope.markers[i].setMap(null);
                }
                $scope.markers = [];
            });

        }]);