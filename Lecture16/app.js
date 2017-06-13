(function () {
    'use strict';

    angular.module('BindingApp', [])
    .controller('BindingController', BindingController);

    BindingController.$inject = ['$scope'];

    function BindingController ( $scope ) {
        $scope.firstName = "Dwight";
        // $scope.fullName = "";

        $scope.showNumberOfWatchers = () => {
            console.log("# of Watchers: ", $scope.$$watchersCount);
        };

        $scope.setFullName = () => {
            $scope.fullName = $scope.firstName + " " + "Demmers";
        };

        $scope.logFirstName = () => {
            console.log("First name is: ", $scope.firstName);
        };

        $scope.logFullName = () => {
            console.log("Full name is: ", $scope.fullName);
        };
    }
})();