class Comment
    include Mongoid::Document
    include Mongoid::Timestamps

    belongs_to :user
    belongs_to :text

    field :body, type: String
    field :likes, type: Array, default: []

    validates_presence_of :user
    validates_presence_of :text

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
