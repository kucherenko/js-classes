import * as angular from 'angular';
import {IndexController} from "./controllers/IndexController"
import {MyController} from "./controllers/MyController"
import {SmilesFilter} from "./filters/SmilesFilter"

let Lesson5App = angular.module('Lesson5App', []);
Lesson5App.controller('IndexController', IndexController);
Lesson5App.controller('MyController', MyController);
Lesson5App.filter('smiles', SmilesFilter);
