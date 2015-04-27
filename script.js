var procrastinate = require('procrastinate');

angular.module('ProcrastinateApp', [])
  .controller('ProcrastinateController', function ($scope) {
    $scope.procrastinate = procrastinate;
    $scope.input = 'Array\n  #indexOf()\n    should return -1 when the value is not present';
  });
