export class DeskController{
    constructor(FlowersService, $scope) {
        $scope.$on('data', (data) => {
            console.log($scope.name);
            console.log(data)
        });
        this.desk = 'Flowers Table';
        this.flowers = FlowersService.getFlowers();
    }
}