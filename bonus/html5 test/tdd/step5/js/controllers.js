'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
      $http.get('phones/phones.txt').success(function (data) {
          $scope.phones = data;
      });

      $scope.orderProp = 'age';
  }]);

function PhoneDetailCtrl($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.txt')
	.success(function(data) {
	    $scope.phone = data;
	    if ( data && data.images ) {
		$scope.mainImageUrl = data.images[0];
	    }
	});
    
    $scope.setImage = function (imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', PhoneDetailCtrl]);
