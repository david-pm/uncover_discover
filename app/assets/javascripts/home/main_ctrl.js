(function() {
  'use strict';

  angular.module('flapperNews')

    .controller('MainCtrl', [ '$scope', 'posts',

      function($scope, posts){
        // scope variables
        $scope.title = '';
        $scope.addPost = addPost;
        $scope.incrementUpvotes = incrementUpvotes;

        posts.getAll()
            .then(function(data){
              console.log(data);
              $scope.posts = data;
            }, null, function(notify) {
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


        function addPost(){
          if (!$scope.title || $scope.title === '') { return; }

          posts.create({
            title: $scope.title,
            link: $scope.link,
          })
          .then(function(data){
            console.log(data);
            $scope.posts.push(data);
          }, null, function(notify) {
            console.log(notify);
          })
          .catch(function(errorPayLoad) {
            console.log(errorPayLoad);
          });
          $scope.title = '';
          $scope.link = '';
        };

        function incrementUpvotes(post) {
          post.upvotes++;
        }

    }]);

}());
