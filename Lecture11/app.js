(function () {
    'use strict';

    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope'];

    function MsgController ( $scope ) {
        $scope.name = "Dwight";
        $scope.stateOfBeing = "hungry";

        $scope.sayMessage = function () {
            return "Dwight likes to eat healty snacks at night";
        };

        $scope.feedDwight = function () {
            $scope.stateOfBeing = "fed";
        };
    }
})();