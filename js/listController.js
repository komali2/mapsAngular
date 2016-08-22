angular.module('mapApp')
    .factory('listFactory', [()=>{

    }])
    .controller('listController', ['$scope', 'mapFactory', ($scope, mapFactory)=>{
        // $scope.$watch('searchData.results', (newVal, oldVal)=>{
        //     console.log('list saw the change', newVal);
        // });
        $scope.openInfoWindow = function(e, selectedMarker){
            mapFactory.openInfoWindow(e, selectedMarker);
        };
        
    }]);