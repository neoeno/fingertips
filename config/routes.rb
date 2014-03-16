Rails.application.routes.draw do
    namespace :api, path: 'api/v1' do
        resources :things, only: :index
        get '/oauth/:provider/callback' => 'sessions#create'
        get '/oauth/:provider/test' => 'sessions#test'
    end
end
