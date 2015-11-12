(function() {
  'use strict';

  angular.module('flapperNews')
         .factory('posts', ['$http', '$q',

    function($http, $q) {

      return {
        getAll: getAll,
        create: create
      };

      function getAll() {
        var deferred = $q.defer();

        $http({
          url: '/posts.json',
          method: 'get'
        })
        .then(function(response){
          if (response.data) {
            deferred.notify('DATA retrieved');
            deferred.resolve(response.data);
          }
        }).catch(function(response) {
          deferred.reject(response.status + ' : ' + response.statusText);
        });

        return deferred.promise;
      }

      function create(post) {
        var deferred = $q.defer();
        $http({
          url: '/posts.json',
          method: 'post',
          data: post
        })
        .then(function(response){
          if (response.data) {
            deferred.notify('DATA saved');
            deferred.resolve(response.data);
          }
        }).catch(function(response) {
          deferred.reject(response.status + ' : ' + response.statusText);
        });

        return deferred.promise;
      }


    }]);
}());
