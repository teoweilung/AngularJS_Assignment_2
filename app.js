(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var itemBuyer = this;

    // This is the part that connects the shared service to the controller and to be displayed in HTML
    itemBuyer.toBuyArray = ShoppingListCheckOffService.getToBuyItems();

    itemBuyer.buyItem = function(itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    }

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBought = this;

    alreadyBought.alreadyBoughtArray = ShoppingListCheckOffService.getAlreadyBoughtItems();

  }

  function ShoppingListCheckOffService () {
    var service = this;

    var toBuyArray = [
      { name: "cookies", quantity: 10},
        { name: "pepperidge farm biscuits", quantity: 5},
          { name: "pepsi cola", quantity: 8},
            { name: "fuji apples", quantity: 25},
              { name: "sunkist oranges", quantity: 5},
    ];

    var alreadyBoughtArray = [];

    service.buyItem = function (itemIndex) {
      alreadyBoughtArray.push(toBuyArray[itemIndex]);
      toBuyArray.splice(itemIndex, 1);
    };

    service.getToBuyItems = function () {
      return toBuyArray;
    };

    service.getAlreadyBoughtItems = function () {
      return alreadyBoughtArray;
    };
  }
})();
