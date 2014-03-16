angular.module('fingertips')
    .controller('AuthenticationCtrl', function($scope, $http, Facebook, $location){
        'use strict';

        $scope.login = function(){
            Facebook.login(function(response) {
                $http.get('/api/v1/oauth/facebook/callback').then(function(){
                    $location.path('/texts')
                })
            }, {scope: 'basic_info,email'})
        }
    })
