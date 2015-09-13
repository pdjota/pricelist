angular.module('priceclient.services', ['ngResource'])
.factory('Product', function ($resource) {
  return $resource('http://localhost:3000/api/products');
});
 
