class User
	include Mongoid::Document
	include Mongoid::Timestamps

    field :provider, type: String
    field :uid, type: String

    field :name, type: String
    field :first_name, type: String
    field :email, type: String

	has_many :texts
	has_many :comments

    ## OAUTH
	def self.find_or_create_from_auth_hash(auth)
		where(auth.slice(:provider, :uid)).first_or_create do |user|
			user.provider = auth.provider
			user.uid = auth.uid
			user.email = auth.info.email
			user.name = auth.info.name
            user.first_name = auth.info.first_name
		end
	end

	def categories
		texts.pluck(:category).uniq
	end

end
