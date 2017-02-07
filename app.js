//MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//Routing
weatherApp.config(function ($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'mainController'
    })

    .when('/forecasting', {
      templateUrl: 'pages/forecasting.html',
      controller: 'forecastingController'
    })

});

//CONTROLLERS

weatherApp.controller('mainController', ['$scope', function($scope) {


}]);

weatherApp.controller('forecastingController', ['$scope', function($scope) {


}]);
