// CUSTOM DIRECTIVES

weatherApp.directive('weatherResult', function () {
  return {

    templateUrl: 'directives/weatherResult.html',
    replace: true,
    scope: {
      weatherDay: '=',
      convertToStandard: "&",
      convertToDate: "&",
      dateFormat: "@"
    }
  };

});
