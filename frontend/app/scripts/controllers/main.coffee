'use strict'

angular.module('frontendApp')
  .controller 'MainCtrl', ($scope, $http) ->
    $scope.awesomeThings = []

    $http.get('/api/v1/things').success (data) ->
      $scope.awesomeThings = data
