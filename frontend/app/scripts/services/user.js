angular.module('fingertips')
    .factory('User', function(railsResourceFactory){
        'use strict';

        var User = railsResourceFactory({
            url: '/api/v1/users',
            name: 'user',
        })

        User.prototype.avatar = function(width){
            width = width || 50
            return 'https://graph.facebook.com/'+this.uid+'/picture?width='+width+'&height='+width
        }

        User.prototype.homepage = function(){
            return 'https://www.facebook.com/'+this.uid
        }

        return User
    })
