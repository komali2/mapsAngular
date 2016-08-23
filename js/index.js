'use strict'; // Allows block-scope and other useful es6 syntax

// Main App Declaration
// ngAnimate only dependency - needed to have Angular attach animation classes
var app = angular.module('mapApp', ['ngAnimate'])
  // Parent controller, highest scope in this app
  .controller('mainController', [
    '$scope',
    'mapFactory',
    'searchFactory',
    ($scope, mapFactory, searchFactory) => {

      // Declaring on $scope here means that child $scopes will inherent, and can modify, 
      // and can thus see their siblings' changes
      $scope.center = new google.maps.LatLng(37.779353, -122.398030);
      $scope.location = new google.maps.LatLng(37.779353, -122.398030);
      $scope.markers = [];
      $scope.map = mapFactory.init(document.getElementById('map'), $scope.center);
      $scope.service = searchFactory.init($scope.map);

      // Nesting objects is necessary in Angular, otherwise childscopes will create new properties,
      // rather than modify existing ones on the parent
      $scope.searchData = { results: [] };

      // Angular listener catches a child "emit" event
      // This one updates location, another way to pass scope changes up the inheritance tree
      $scope.$on('changedLocation', (event, location) => {
        $scope.location = location;
        $scope.$apply();
      });

      // Clears markers off the map and resets the markers array
      $scope.$on('search', () => {
        for (let i = 0; i < $scope.markers.length; i++) {
          $scope.markers[i].setMap(null);
        }
        $scope.markers = [];
      });

    }]);