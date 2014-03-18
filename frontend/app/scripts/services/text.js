angular.module('fingertips')
    .factory('Text', function(railsResourceFactory, railsSerializer, Comment){
        'use strict';
        var maxPreviewLength = 250

        function wordCount(text){
            return text.split(/\W+/).length
        }

        var Text = railsResourceFactory({
            url: '/api/v1/texts',
            name: 'text',
            interceptors: [{
                afterResponse: function(result){
                    if( angular.isArray(result) ){
                        angular.forEach(result, function(text){ text.init() })
                    }else{
                        result.init()
                    }

                    return result
                },
                response: function(result){
                    // accept either wrapped or unwrapped
                    if( result.data.text )
                        result.data = result.data.text
                    return result
                }
            }],
            serializer: railsSerializer(function(){
                this.resource('likers', 'User')
                this.resource('user', 'User')
                this.resource('comments', 'Comment')
            })
        })

        Text.prototype.makePreview = function(){
            if( this.body.length > maxPreviewLength) {
                this.preview = this.body.split('\n\n').slice(0,2).join('\n\n')

                if( this.preview.length > maxPreviewLength ){
                    this.preview = this.body.substring(0, maxPreviewLength-1)+'…'
                }

                this.previewDifference = wordCount(this.body) - wordCount(this.preview)
            }
        }

        Text.prototype.init = function(){
            this.makePreview()

            angular.forEach(this.comments, function(comment){
                comment.init()
            })
        }

        Text.prototype.isPreviewable = function(){
            return typeof this.previewWordDifference == 'undefined'
        }

        Text.prototype.like = function(opts){
            opts = opts || {}
            if( opts.destroy ){
                return this.$delete(this.$url('like'))
            }else{
                return this.$post(this.$url('like'))
            }
        }

        Text.prototype.hasLiked = function(userId){
            return this.likes.indexOf(userId) !== -1
        }

        Text.prototype.comment = function(commentData){
            var comment = new Comment(commentData)
            comment.textId = this.id
            this.comments.push(comment)
            return comment.create()
        }

        Text.prototype.lastComments = function(){
            return this.comments.slice(this.comments.length-2)
        }

        return Text
    })
