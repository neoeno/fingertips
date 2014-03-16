angular.module('fingertips')
    .controller('TextsFormCtrl', function($scope, Current, Text){
        'use strict';
        $scope.titlePlaceholder = 'write here…'
        $scope.text = {}
        $scope.categories = []

        $scope.$watch(function(){ return Current.user }, function(){
            $scope.user = Current.user
            $scope.categories = Current.user.categories
        })

        $scope.showFullForm = function(){
            $scope.fullForm = true
            $scope.titlePlaceholder = 'write your title here'
        }

        $scope.submit = function(){
            new Text($scope.text).create()
        }
    })
