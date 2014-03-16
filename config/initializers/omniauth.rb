Rails.application.config.middleware.use OmniAuth::Builder do
    provider :facebook, ENV['FACEBOOK_KEY'], ENV['FACEBOOK_SECRET'],
             :scope => 'basic_info,email', :callback_path => "/api/v1/oauth/facebook/callback",
             :provider_ignores_state => true
end
