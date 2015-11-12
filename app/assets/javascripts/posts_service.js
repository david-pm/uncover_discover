(function() {
  'use strict';

  angular.module('flapperNews')
         .factory('posts', [

    function() {
      var obj = {
        postCollection: []
      };
      return obj;
    }

  ])

}());
