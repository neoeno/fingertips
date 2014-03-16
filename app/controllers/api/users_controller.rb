class Api::UsersController < ApplicationController

    def show
        render json: this_user
    end

    private

    def this_user
        params[:id] == 'current' ? current_user : User.find(params[:id])
    end

end
