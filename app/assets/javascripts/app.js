(function() {
  'use strict';

  angular.module('flapperNews', ['ui.router'])

    .config(['$stateProvider', '$urlRouterProvider',

      function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: '/home.html',
            controller: 'MainCtrl'
          })
          .state('posts', {
            url: '/posts/{id}',
            templateUrl: '/posts.html',
            controller: 'PostsCtrl'
          });

        $urlRouterProvider.otherwise('/');
    }]);

}());
