angular.module('frontendApp')
    .controller('MainCtrl', function($scope, $http){
        'use strict'
        $scope.awesomeThings = []

        $http.get('/api/v1/things').success(function(data){
            $scope.awesomeThings = data
        })
})
