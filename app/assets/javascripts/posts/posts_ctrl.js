(function() {
  'use strict';

  angular.module('flapperNews')

    .controller('PostsCtrl', ['$scope','$stateParams','posts',

      function($scope, $stateParams, posts){
        // scope variables
        $scope.post = posts.postCollection[$stateParams.id];

        $scope.addComment = addComment;

        // scope funcitons
        function addComment() {
          if($scope.body === '') { return; }
          $scope.post.comments.push({
            body: $scope.body,
            author: 'user',
            upvotes: 0
          });
          $scope.body = '';
        }

    }]);

}());
