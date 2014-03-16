angular.module('fingertips')
    .factory('Text', function(railsResourceFactory, User, $http){
        'use strict';

        var maxPreviewLength = 250

        function wordCount(text){
            return text.split(/\W+/).length
        }

        function processResponse(text){
            text.user = new User(text.user)
            text.likers = processLikers(text.likers)

            if( text.body.length > maxPreviewLength) {
                text.showPreview = true
                text.preview = text.body.split('\n\n').slice(0,2).join('\n\n')

                if( text.preview.length > maxPreviewLength ){
                    text.preview = text.body.substring(0, maxPreviewLength-1)+'…'
                }

                text.previewWordDifference = wordCount(text.body) - wordCount(text.preview)
            }
        }

        function processLikers(likersData){
            var likers = []
            angular.forEach(likersData, function(user){
                likers.push(new User(user))
            })
            return likers
        }

        var Text = railsResourceFactory({
            url: '/api/v1/texts',
            name: 'text',
            interceptors: [{
                afterResponse: function(result){
                    angular.forEach(result, processResponse)
                    return result
                }
            }]
        })

        Text.prototype.isPreviewable = function(){
            return typeof this.previewWordDifference == 'undefined'
        }

        Text.prototype.like = function(opts){
            var context = this
            return $http.post('/api/v1/texts/'+this.id+'/like', opts).then(function(response){
                context.likes = response.data.text.likes
                context.likers = processLikers(response.data.text.likers)
            })
        }

        Text.prototype.hasLiked = function(userId){
            return this.likes.indexOf(userId) !== -1
        }

        return Text
    })
