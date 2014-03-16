source 'https://rubygems.org'

gem 'rails', '4.1.0.rc1'

gem 'rails-api'

# Use Mongoid for db
gem 'moped', github: 'mongoid/moped'
gem 'mongoid', github: 'mongoid/mongoid'

# To use Jbuilder templates for JSON
gem 'jbuilder'

# Use unicorn as the app server
gem 'unicorn'

# Active Model Serializers for our JSON API
gem "active_model_serializers"

# Omniauth for users
gem "omniauth"
gem "omniauth-facebook"

# Slim is the besttt
gem "slim"
gem "redcarpet" # For embedded markdown

gem 'spring', :group => :development
group :development, :test do
  gem "rspec-rails"
  gem "jazz_hands"
end

group :development do
	gem "better_errors"
	gem "binding_of_caller"
	gem 'meta_request'
end

# Heroku wants this
gem 'rails_12factor', group: :production
