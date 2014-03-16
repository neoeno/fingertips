Rails.application.routes.draw do
    namespace :api, path: 'api/v1' do
        resources :users, only: [:show]
        resources :texts do
            member do
                post 'like' => 'texts#like'
            end
        end
        get '/oauth/:provider/callback' => 'sessions#create'
        get '/oauth/:provider/test' => 'sessions#test'
    end
end
