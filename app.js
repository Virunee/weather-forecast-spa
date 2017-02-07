//MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//Routing
weatherApp.config(function ($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'mainController'
    })

    .when('/forecast', {
      templateUrl: 'pages/forecast.html',
      controller: 'forecastController'
    })

});

//CONTROLLERS

weatherApp.controller('mainController', ['$scope', function($scope) {


}]);

weatherApp.controller('forecastController', ['$scope', function($scope) {


}]);
