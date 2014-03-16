angular.module('fingertips')
    .controller('TextsIndexCtrl', function($scope, Current, Text){
        'use strict';

        $scope.showFullText = false

        $scope.$watch(function(){ return Current.user }, function(){
            $scope.user = Current.user
        })

        Text.query().then(function(texts){
            $scope.texts = texts
        })

    })
