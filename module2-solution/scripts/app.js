(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

        ToBuyController.$inject = [ 'ShoppingListCheckOffService' ];
        function ToBuyController ( shoppingListCheckOffService ) {
            var list = this;

            list.items = shoppingListCheckOffService.getItems('items_tobuy');

            list.checkOffItem = function (itemIndex) {
                shoppingListCheckOffService.checkOffItem(itemIndex);
            };
        }

        AlreadyBoughtController.$inject = [ 'ShoppingListCheckOffService' ];
        function AlreadyBoughtController ( shoppingListCheckOffService ) {
            var list = this;
            list.items = shoppingListCheckOffService.getItems('items_bought');
        }

        function ShoppingListCheckOffService () {
            var service = this;
            var items_tobuy = [
                { name: "Milk", quantity: "2" },
                { name: "Donuts", quantity: "200" },
                { name: "Cookies", quantity: "300" },
                { name: "Chocolate", quantity: "5" },
                { name: "Coffee", quantity: "3" }
            ];
            var items_bought = [];

            service.checkOffItem = function (itemIndex) {
                items_bought.push(items_tobuy[itemIndex]);
                items_tobuy.splice(itemIndex, 1);
            }

            service.getItems = function (listType) {
                return listType === 'items_tobuy' ? items_tobuy : items_bought;
            };
        }
})();