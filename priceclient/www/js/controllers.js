angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})
.controller('CartCtrl', function($scope) {
  $scope.products = [
    {
      name: 'Blue Fedora',
      upc: 123,
      image: null
    },
    {
      name: 'Red Hat',
      upc: 543
    }
  ];
})
.controller('SearchCtrl', function($scope) {
  $scope.products = [
    {
      name: 'Blue Fedora',
      upc: 123,
      image: null
    },
    {
      name: 'Red Hat',
      upc: 543
    },
    {
      name: 'Green Beret',
      upc: 533
    }
  ];
});
