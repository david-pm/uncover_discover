(function() {
  'use strict';

  angular.module('flapperNews')
         .factory('posts', ['$http', '$q',

    function($http, $q) {

      // API
      return {
        getAll: getAll,
        get: get,
        create: create,
        upvote: upvote,
        addComment: addComment,
        upvoteComment: upvoteComment
      };

      function getAll() {
        var deferred = $q.defer();

        $http({
          url: '/posts.json',
          method: 'get'
        })
        .then(function(response){
          if (response.data) {
            deferred.notify('Post retrieved');
            deferred.resolve(response.data);
          }
        }).catch(function(response) {
          deferred.reject(response.status + ' : ' + response.statusText);
        });

        return deferred.promise;
      }

      function get(id) {
        var deferred = $q.defer();

        $http({
          method: 'get',
          url: '/posts/' + id + '.json'
        })
        .then(function(response){
          if (response.data) {
            deferred.notify('All posts retrieved');
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
            deferred.notify('Post saved');
            deferred.resolve(response.data);
          }
        }).catch(function(response) {
          deferred.reject(response.status + ' : ' + response.statusText);
        });

        return deferred.promise;
      }

      function addComment(id, comment) {
        var deferred = $q.defer();

        $http.post('/posts/' + id + '/comments.json', comment)

        .then(function(response){
          if (response.data) {
            deferred.notify('Comment saved');
            deferred.resolve(response.data);
          }
        }).catch(function(response) {
          deferred.reject(response.status + ' : ' + response.statusText);
        });

        return deferred.promise;
      }

      function upvote(post) {
        $http({
          method: 'put',
          url: '/posts/' + post.id + '/upvote.json'
        })
        .then(function(response){
          if (response) {
            post.upvotes++;
          }
        }).catch(function(response) {
          console.warn('There was a problem: ' + response.statusText);
        });
      }

      function upvoteComment(post, comment) {
        $http({
          method: 'put',
          url: '/posts/' + post.id + '/comments/' +
                comment.id + '/upvote.json'
        })
        .then(function(response){
          if (response) {
            comment.upvotes++;
          }
        }).catch(function(response) {
          console.warn('There was a problem: ' + response.statusText);
        });
      }




    }]);
}());
