import * as angular from 'angular';

angular.module('HolaApp', []).controller('MyController', function($scope) {
  this.fName  = 'Angular';
  $scope.framework = 'Angular';
});
