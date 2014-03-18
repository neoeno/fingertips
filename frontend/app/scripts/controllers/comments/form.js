angular.module('fingertips')
    .controller('CommentsFormCtrl', function($scope, Current){
        'use strict';

        $scope.comment = {}

        $scope.submit = function(){
            $scope.text.comment($scope.comment)
            $scope.comment = {}
        }

        $scope.checkForEnter = function(evt){
            if( evt.which == 13 && evt.shiftKey == false){
                $scope.submit()
                evt.target.blur() // yeesh — but I can't work out another way!
                evt.preventDefault()
            }
        }
    })
