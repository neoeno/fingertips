angular.module('fingertips', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'facebook'
])
    .config(function($routeProvider){
        'use strict';
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            }).otherwise({
                redirectTo: '/'
            })
    }).config(function(FacebookProvider){
        'use strict';
        FacebookProvider.init('301293216684634');
    })
