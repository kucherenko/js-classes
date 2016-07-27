export class PotController{
    constructor($scope, $resource) {
        console.log($resource);
        this.clickFlower = () => {
            $scope.name = this.name;
            $scope.$emit('data', {name: this.name});
        }
    }
}