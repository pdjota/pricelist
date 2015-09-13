angular.module('priceclient.controllers', ['priceclient.services'])

.controller('AppCtrl', function($scope) {
})
.controller('CartCtrl', function($scope, Product) {
  $scope.products = Product.query();
})
.controller('SearchCtrl', function($scope, Product) {
  $scope.products = Product.query();
});
