angular.module('fingertips', [
    'ngCookies',
    'rails',
    'ngSanitize',
    'ngRoute',
    'facebook',
    'ui.bootstrap',
    'monospaced.elastic',
    'btford.markdown'
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
