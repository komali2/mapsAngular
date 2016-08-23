angular.module('mapApp')
    .factory('listFactory', [() => {

    }])
    .controller('listController', ['$scope', 'mapFactory', ($scope, mapFactory) => {

        // Map could do this on its own, but this is more MVC friendly
        // Could also follow a Backbone model and use emitters / listeners
        $scope.openInfoWindow = function (e, selectedMarker) {
            mapFactory.openInfoWindow(e, selectedMarker);
        };
    }]);