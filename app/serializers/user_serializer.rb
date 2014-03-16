class UserSerializer < ActiveModel::Serializer
    attributes :id, :uid, :name, :first_name, :categories
end
