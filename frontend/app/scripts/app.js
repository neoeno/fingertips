angular.module('fingertips', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'facebook',
    'ui.bootstrap'
])
    .config(function($routeProvider){
        'use strict';
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            }).when('/texts', {
                templateUrl: 'views/texts/index.html',
                controller: 'TextsIndexCtrl'
            }).otherwise({
                redirectTo: '/'
            })
    }).config(function(FacebookProvider){
        'use strict';
        FacebookProvider.init('301293216684634');
    })
