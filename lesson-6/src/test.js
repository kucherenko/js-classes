import * as angular from 'angular';


let app = angular.module('app', []);

app.sercive('MyService', function () {
  return function() {

  }
});

app.config(($provide) => {
  $provide.service('MyService', function() {
    return function () {}
  })
});
