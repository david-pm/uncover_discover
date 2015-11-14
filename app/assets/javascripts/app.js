(function() {
  'use strict';

  angular.module('flapperNews', ['ui.router', 'templates', 'Devise'])

    .config(['$stateProvider', '$urlRouterProvider', 'AuthProvider',

    function($stateProvider, $urlRouterProvider, AuthProvider) {

    	$stateProvider
    		.state('home', {
    			url: '/home',
    			templateUrl: 'home/_main.html',
    			controller: 'MainCtrl'
    		})
    		.state('posts', {
    			url: '/posts/{id}',
    			templateUrl: 'posts/_posts.html',
    			controller: 'PostsCtrl'
    		});

    		$urlRouterProvider.otherwise('home');
   }]);

}());
