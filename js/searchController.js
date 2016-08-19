angular.module('mapApp')
    .factory('searchFactory', [()=>{
        let api = {};
        var service;
        api.init = function(map){
            //service = new google.maps.places.PlacesService(map);
            return service;
        };

        //example request:
        // var request = {
        //     location: pyrmont,
        //     radius: '500',
        //     types: ['store']
        // };
        api.search = function(request, callback){
            service.nearbySearch(request, callback);
        };
        return api;

    }])
    .controller('searchController', ['$scope', 'searchFactory', ($scope, searchFactory)=>{
        $scope.search = function(location, type){
            let request = {
                location: location,
                radius: '500',
                types: [type]
            };
            searchFactory.search(request, (result)=>{
                console.log('result from search was', result);
            });
        };
    }]);