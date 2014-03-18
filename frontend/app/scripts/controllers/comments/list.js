angular.module('fingertips')
    .controller('CommentsListCtrl', function($scope){
        'use strict';

        $scope.commentsFrom = $scope.text.comments.length - 2
        $scope.comments = $scope.text.comments

        $scope.showComments = function(){
            $scope.commentsFrom = 0
        }

    })
