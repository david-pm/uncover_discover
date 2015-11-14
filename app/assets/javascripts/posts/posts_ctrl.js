(function() {
  'use strict';

  angular.module('UncoverDiscover')

    .controller('PostsCtrl', ['$scope','$stateParams','posts',

      function($scope, $stateParams, posts){
        // scope variables
        $scope.addComment = addComment;
        $scope.incrementUpvotes = incrementUpvotes;


        posts.get($stateParams.id)
          .then(function(data){
            console.log(data);
            $scope.post = data;
          }
          , null, function(notify) {
            console.log(notify);
          })
          .catch(function(errorPayLoad) {
            console.log(errorPayLoad);
          })
          .finally(
            function() {
              console.log("Its all over, Carlos");
            }
          );


        // scope funcitons
        function addComment() {
          if($scope.body === '') { return; }
          posts.addComment($scope.post.id, {
            body: $scope.body,
            author: 'user',
          })
          .then(function(data){
            $scope.post.comments.push(data)
          })
          .catch(function(response) {
            console.log(response);
          });
          $scope.body = '';
        }

        function incrementUpvotes(comment) {
          posts.upvoteComment($scope.post, comment);
        }

    }]);

}());
