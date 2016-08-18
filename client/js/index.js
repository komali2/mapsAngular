var app = angular.module('mapApp', ['ngRoute'])
    .config(($routeProvider)=>{
        $routeProvider
            .when('/', {
                templateUrl: 'main.html',
                controller: 'mainController'
            })
            .when('/about', {
                templateUrl: 'about.html',
                controller: 'aboutController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });