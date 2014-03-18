angular.module('fingertips')
    .controller('TextsFormCtrl', function($scope, Current, Text){
        'use strict';
        $scope.text = {}
        $scope.categories = []

        $scope.$watch(function(){ return Current.user }, function(){
            if( Current.user ){
                $scope.user = Current.user
                $scope.categories = Current.user.categories
            }
        })

        $scope.showFullForm = function(){
            $scope.fullForm = true
        }

        $scope.submit = function(){
            new Text($scope.text).create()
        }
    })
