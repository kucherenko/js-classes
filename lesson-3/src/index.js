import * as angular from 'angular';

angular.module('app', []).controller('MyConroller', ($scope) => {
  let name = 'Angular';
  $scope.framework = name;
  console.log($scope + name);
});
