class Api::CommentsController < ApplicationController

    def create
        @comment = Comment.create!(comment_params.merge({user: current_user}))
        render json: @comment
    end

    def like
        this_comment.like!(current_user)
        render json: this_comment
    end

    def unlike
        this_comment.unlike!(current_user)
        render json: this_comment
    end

    private

    def comment_params
        params.require(:comment).permit(:text_id, :body)
    end

    def this_comment
        Comment.find(params[:id])
    end

end
