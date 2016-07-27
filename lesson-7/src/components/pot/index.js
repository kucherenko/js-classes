import {PotController} from "./PotController";

export default {
    bindings: {
        name: '='
    },
    require: {
        desk: '^desk'
    },
    controller: PotController,
    templateUrl: "src/components/pot/pot.html",
    link: function (scope, element, attrs, controllers) {
        console.log(controllers);

    }
}