import * as angular from "angular";
import desk from "./desk/";
import pot from "./pot/";
import {FlowersService} from "./services/FlowersService";

export let components = angular.module('components', ['ngResource']);

components.component('desk', desk);
components.component('pot', pot);

components.factory('FlowersService', FlowersService);