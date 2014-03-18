class Api::TextsController < ApplicationController

    def index
        @texts = Text.all.order_by(:updated_at.desc)
        render json: @texts
    end

    def show
        render json: this_text
    end

    def create
        @text = Text.create!(text_params.merge({user: current_user}))
        render json: @text
    end

    def like
        this_text.like!(current_user)
        render json: this_text
    end

    def unlike
        this_text.unlike!(current_user)
        render json: this_text
    end

    private

    def text_params
        params.require(:text).permit(:title, :body, :category)
    end

    def this_text
        Text.find(params[:id])
    end

end
