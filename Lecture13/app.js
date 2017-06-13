(function () {
    'use strict';

    angular.module('MsgApp', [])
    .controller('MsgController', MsgController)
    .filter('loves', LovesFilter)
    .filter('truth', TruthFilter);

    MsgController.$inject = ['$scope', 'lovesFilter', 'truthFilter'];

    function MsgController ( $scope, lovesFilter, truthFilter ) {
        $scope.name = "Dwight";
        $scope.stateOfBeing = "hungry";

        $scope.sayMessage = function () {
            var msg = "Dwight likes to eat healty snacks at night";
            return msg;
        };

        $scope.sayLovesMessage = function () {
            var msg = "Dwight likes to eat healty snacks at night";
            var output = lovesFilter(msg);
            return output;
        };

        $scope.feedDwight = function () {
            $scope.stateOfBeing = "fed";
        };
    }

    function LovesFilter() {
        return function (input) {
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        };
    }

    function TruthFilter() {
        return function (input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;
        }
    }
})();