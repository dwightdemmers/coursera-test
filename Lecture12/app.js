(function () {
    'use strict';

    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope', '$filter'];

    function MsgController ( $scope, $filter ) {
        $scope.name = "Dwight";
        $scope.stateOfBeing = "hungry";
        $scope.cookieCost = .45; 

        $scope.sayMessage = function () {
            var msg = "Dwight likes to eat healty snacks at night";
            var output = $filter('uppercase')(msg);
            return output;
        };

        $scope.feedDwight = function () {
            $scope.stateOfBeing = "fed";
        };
    }
})();