angular.module('fingertips')
    .service('Current', function(User){
        'use strict';
        var Current = {}

        User.get({id: 'current'}).then(function(user){
            Current.user = user
        })


        return Current
    })
