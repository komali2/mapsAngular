'use strict';

var app = angular.module('mapApp', [])

    .factory('mapFactory', [()=>{
        var map;
        let api = {};
        api.cities = [
            {
                city : 'San Francisco',
                desc : 'Why is the rent so high?',
                lat : 37.785326,
                long : -122.400175
            },
        ];
        api.mapOptions = {
            'SOMA': {
                zoom: 14,
                center: new google.maps.LatLng(37.779353, -122.398030),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            'ZENEFITS': {
                zoom: 4,
                center: new google.maps.LatLng(37.785394, -122.395406),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
        };
        
        api.init = function(mapElement, location){
            map = new google.maps.Map(mapElement, api.mapOptions[location]);
            return map;
        }

        

        return api;
        
    }])
    .controller('mainController', ['$scope', 'mapFactory', ($scope)=>{
        
        

        

    }]);