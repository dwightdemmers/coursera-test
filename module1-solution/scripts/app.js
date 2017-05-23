(function () {
    'use strict';

    angular.module('LunchCheck', [])
           .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    const EMPTY_VALUES_WARNING = "Please enter data first";
    const ENOUGH_MESSAGE = "Enjoy!";
    const TOMUCH_MESSAGE = "Too much";

    function LunchCheckController ( $scope ) {

        $scope.checkLunch = function () {
            var foodlist = $scope.foodlist != undefined ? $scope.foodlist.split(/\s*,\s*/).filter(i => i) : []; // Will remove empty values like ", ," and ",,"

            if (foodlist.length === 0) {
                $scope.message = EMPTY_VALUES_WARNING;
                $scope.formGroupState = "has-error";
                $scope.messageState = "text-danger";
            }

            if (foodlist.length <= 3 && foodlist.length !== 0) {
                $scope.message = ENOUGH_MESSAGE;
                $scope.formGroupState = "has-success";
                $scope.messageState = "text-success";
            }

            if (foodlist.length > 3) {
                $scope.message = TOMUCH_MESSAGE;
                $scope.formGroupState = "has-success";
                $scope.messageState = "text-success";
            }
        };
    }

})();