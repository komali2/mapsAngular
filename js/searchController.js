angular.module('mapApp')
  .factory('searchFactory', [() => {
    let api = {};
    let service;

    // This creates the Google Maps Search Service
    api.init = function (map) {
      service = new google.maps.places.PlacesService(map);
      return service;
    };

    // Example request:
    // var request = {
    //     location: google.maps.LatLng,
    //     radius: '500',
    //     keyword: 'something'
    // };
    api.search = function (request, callback) {
      service.nearbySearch(request, callback);
    };

    // Called on opening a modal to get more details on given location
    // PlaceId can only be acquired from a previous search
    api.getDetails = function (placeId, cb) {
      service.getDetails({ placeId }, (place) => {
        cb(place);
      });
    };

    return api;
  }])
  .controller('searchController', ['$scope', 'searchFactory', ($scope, searchFactory) => {
    $scope.search = function (keyword) {
      let request = {
        location: $scope.location,
        radius: '500',
        keyword: keyword
      };

      searchFactory.search(request, (result) => {
        $scope.$emit('search');
        $scope.searchData.results = result;

        // This allows flexbox to function without hardcoding a width until it becomes necessary
        angular.element(document.querySelector('#listArea')).addClass('widthSet');

        // Necessary to tell Angular to update the parent scope
        $scope.$apply();
      });
    };
  }]);