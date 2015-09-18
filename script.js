var procrastinate = require('procrastinate');

angular.module('ProcrastinateApp', ['ui.ace'])
  .controller('ProcrastinateController', function ($scope) {
    $scope.procrastinate = procrastinate;
    $scope.input = 'Array\n  #indexOf()\n    should return -1 when the value is not present';

    $scope.$watchGroup(['formatter', 'input'], function (newValues, _, scope) {
      if (newValues[0] && newValues[1]) {
        scope.output = procrastinate(newValues[0], newValues[1]);
      }
    });
  });
