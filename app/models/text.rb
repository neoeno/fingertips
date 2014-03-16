class Text
    include Mongoid::Document
    include Mongoid::Timestamps

    belongs_to :user

    field :title, type: String
    field :body, type: String
    field :category, type: String

    field :likes, type: Array, default: []

    # embeds_many :comments

    def liked?(test_user)
        return likes.include?(test_user.id.to_s)
    end

    def like!(user)
        unless liked? user
            likes << user.id.to_s
            save!
        end
    end

    def unlike!(user)
        likes.delete(user.id.to_s)
        save!
    end
end
