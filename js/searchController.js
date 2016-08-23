angular.module('mapApp')
    .factory('searchFactory', [()=>{
        let api = {};
        var service;
        api.init = function(map){
            service = new google.maps.places.PlacesService(map);
            return service;
        };

        //example request:
        // var request = {
        //     location: google.maps.LatLng,
        //     radius: '500',
        //     type: 'store',
        //     keyword: 'something'
        // };
        api.search = function(request, callback){
            service.nearbySearch(request, callback);
            
        };
        api.getDetails = function(placeId, cb){
            service.getDetails({placeId}, (place, status)=>{
                cb(place);
            });
        };
        return api;

    }])
    .controller('searchController', ['$scope', 'searchFactory', ($scope, searchFactory)=>{
        $scope.search = function(keyword, type){
            let request = {
                location: $scope.location,
                radius: '500',
                type: type ? type : undefined,
                keyword: keyword
            };
            searchFactory.search(request, (result)=>{
                $scope.$emit('search');
                $scope.searchData.results = result;
                angular.element(document.querySelector('#listArea')).addClass('widthSet');
                $scope.$apply();
            });
        };
    }]);