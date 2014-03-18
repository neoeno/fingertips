angular.module('fingertips')
    .factory('Comment', function(railsResourceFactory, railsSerializer){
        'use strict';
        var maxPreviewLength = 250


        var Comment = railsResourceFactory({
            url: '/api/v1/comments',
            name: 'comment',
            afterResponse: function(result){
                result.init()
                return result
            },
            serializer: railsSerializer(function(){
                this.resource('user', 'User')
            })
        })

        Comment.prototype.makePreview = function(){
            if( this.body.length > maxPreviewLength) {
                this.preview = this.body.split('\n\n').slice(0,2).join('\n\n')

                if( this.preview.length > maxPreviewLength ){
                    this.preview = this.body.substring(0, maxPreviewLength-1)+'…'
                }
            }
        }

        Comment.prototype.init = function(){
            this.makePreview()
        }

        return Comment
    })
