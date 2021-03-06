class CommentSerializer < ActiveModel::Serializer
    attributes :id, :body, :likes, :likers
    has_one :user

    def likers
        return [] if likes.blank?
        ActiveModel::ArraySerializer.new(
            User.any_of(likes.map {|user_id| {id: user_id}}),
            each_serializer: UserSerializer)
    end
end
