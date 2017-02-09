// CUSTOM DIRECTIVES

weatherApp.directive('weatherResult', function () {
  return {
    restrict: 'E',
    templateUrl: 'directives/weatherResult.html',
    replace: true,
    scope: {
      weatherDay: '=',
      convertToStandard: "&",
      convertToDate: "&",
      dateFOrmat: "@"
    }
  };

});
