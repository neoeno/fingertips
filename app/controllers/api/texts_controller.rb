class Api::TextsController < ApplicationController

    def index
        @texts = Text.all
        render json: @texts
    end

    def show
        @text = Text.find(params[:id])
        render json: @text
    end

    def create
        @text = Text.create!(text_params, user: current_user)
        render json: @text
    end

    def like
        @text = Text.find(params[:id])
        if params[:destroy]
            @text.unlike!(current_user) 
        else
            @text.like!(current_user)
        end
        render json: @text
    end

    private

    def text_params
        params.require(:text).permit(:title, :body, :category)
    end

end
