(function() {
  'use strict';
  angular.module('UncoverDiscover')

  .controller('NavCtrl', ['$scope','Auth',
  function($scope, Auth){
    // scope vars
    $scope.signedIn = Auth.isAuthenticated;
    $scope.logout = Auth.logout;

    Auth.currentUser().then(function (user){
      $scope.user = user;
    });
    // events
    $scope.$on('devise:new-registration', function (e, user){
      $scope.user = user;
    });

    $scope.$on('devise:login', function (e, user){
      $scope.user = user;
    });

    $scope.$on('devise:logout', function (e, user){
      $scope.user = {};
    });

  }]);

}());
