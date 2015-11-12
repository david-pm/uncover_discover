(function() {
  'use strict';

  angular.module('flapperNews')
  
    .controller('MainCtrl', [ '$scope', 'posts',

      function($scope, posts){
        // scope variables
        $scope.title = '';
        $scope.addPost = addPost;
        $scope.incrementUpvotes = incrementUpvotes;
        $scope.posts = posts.postCollection;

        // scope functions
        function addPost(){
          if (!$scope.title || $scope.title === '') { return; }

          $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0,
            comments: [
              {author: 'Joe', body: 'Cool post!', upvotes: 0},
              {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
            ]
          });
          $scope.title = '';
          $scope.link = '';
        };

        function incrementUpvotes(post) {
          post.upvotes++;
        }

    }]);

}());
