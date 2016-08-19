'use strict';

var app = angular.module('mapApp', [])

    
    .controller('mainController', [
        '$scope', 
        'mapFactory', 
        'searchFactory', 
        ($scope, mapFactory, searchFactory)=>{
            $scope.center = 'SOMA';
            $scope.markers = [];
            console.log('element is', document.getElementById('map'));
            $scope.map = mapFactory.init(document.getElementById('map'), $scope.center);
            //$scope.service = searchFactory.init($scope.map);

        }]);