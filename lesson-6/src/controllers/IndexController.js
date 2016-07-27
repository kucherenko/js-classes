export class IndexController {
  constructor($scope, $filter, $controller, $location, MyService) {
      $scope.hello = 'Hello :), I\'m :)!';
      console.log($location.state());
      MyService.ololo();
  }
}
