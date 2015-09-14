angular.module('priceclient.controllers', ['priceclient.services'])

.controller('AppCtrl', function($scope) {
})
.controller('CartCtrl', function($scope, Cart) {
  $scope.lines = Cart.lines;
  $scope.totals = Cart.totals;
})
.controller('SearchCtrl', function($scope, Product, Cart) {
  $scope.products = Product.query();
  $scope.addToCart = function (product) {
    Cart.addToCart(product);
  };
})
.controller('MenuCtrl', function($scope, Cart) {
  $scope.cartLines = Cart.lines;
});
