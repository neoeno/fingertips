class Text
    include Mongoid::Document
    include Mongoid::Timestamps

    belongs_to :user
    has_many :comments

    field :title, type: String
    field :body, type: String
    field :category, type: String

    field :likes, type: Array, default: []

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
