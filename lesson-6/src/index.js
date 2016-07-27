import * as angular from 'angular';
import "angular-translate";
import {IndexController} from "./controllers/IndexController"
import {MyController} from "./controllers/MyController"
import {SmilesFilter} from "./filters/SmilesFilter"
import {MyServiceProvider} from "./services/myServiceProvider"
import {MyService} from "./services/myService"

let Lesson5App = angular.module('Lesson5App', ['pascalprecht.translate']);
Lesson5App.controller('IndexController', IndexController);
Lesson5App.controller('MyController', MyController);
Lesson5App.filter('smiles', SmilesFilter);
Lesson5App.provider('MyService', MyServiceProvider);
Lesson5App.factory('MyService', MyService);

Lesson5App.config(($locationProvider, $translateProvider) => {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $translateProvider.translations('en', {
    TITLE: 'Hello',
  });
  $translateProvider.translations('es', {
    TITLE: 'Hola'
  });
  $translateProvider.preferredLanguage('en');
  $translateProvider.useSanitizeValueStrategy(null);
});
