//CONTROLLERS

weatherApp.controller('mainController', ['$scope', 'cityService', function($scope, cityService) {

  $scope.city = cityService.city;

  $scope.$watch('city', function () {
    cityService.city = $scope.city;
  });

}]);

weatherApp.controller('forecastController', ['$scope','$resource','cityService','$routeParams', function($scope, $resource, cityService, $routeParams) {

  $scope.city = cityService.city;
  $scope.days = $routeParams.days || '2';

  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=cb0d63f0af9b39ee91a56e99c1cbc268", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP" }});

    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt:$scope.days });

console.log($scope.weatherResult);
    $scope.convertToCelsius = function(degK) {
      return Math.round(degK - 273.15);
    }

    $scope.convertToDate = function(dt) {
      return new Date(dt*1000);
    }

}]);
