(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ShoppingListController', ShoppingListController)
        .factory('ShoppingListFactory', ShoppingListFactory);

        ShoppingListController.$inject = [ 'ShoppingListFactory' ];
        function ShoppingListController ( shoppingListFactory ) {
            var list = this;

            var shoppingList = shoppingListFactory(3);

            list.items = shoppingList.getItems();

            list.itemName = "";
            list.itemQuantity = "";

            list.addItem = function () {
                try {
                    shoppingList.addItem(list.itemName, list.itemQuantity);
                } catch (error) {
                    list.errorMessage = error.message;
                }
            };

            list.removeItem = function (itemIndex) {
                shoppingList.removeItem(itemIndex);
            };
        }

        function ShoppingListService (maxItems) {
            var service = this;
            var items = [];

            service.addItem = function (itemName, quantity) {
                if((maxItems === undefined) || (maxItems !== undefined) && (items.length < maxItems)) {
                    var item = {
                        name: itemName,
                        quantity: quantity
                    };
                    items.push(item);
                } else {
                    throw new Error("Max items (" + maxItems + ") reached.");
                }
            };

            service.removeItem = function (itemIndex) {
                items.splice(itemIndex, 1);
            }

            service.getItems = function () {
                return items;
            };
        }

        function ShoppingListFactory() {
            var factory = function (maxItems) {
                return new ShoppingListService(maxItems);
            };

            return factory;
        }
})();