class TextSerializer < ActiveModel::Serializer
    attributes :id, :title, :body, :category, :likes, :likers
    has_one :user
    has_many :comments

    def likers
        return [] if likes.blank?
        ActiveModel::ArraySerializer.new(
            User.any_of(likes.map {|user_id| {id: user_id}}),
            each_serializer: UserSerializer)
    end
end
