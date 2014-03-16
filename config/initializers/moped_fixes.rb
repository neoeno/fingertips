Mongoid::Document.send(:include, ActiveModel::SerializerSupport)
Mongoid::Criteria.delegate(:active_model_serializer, to: :to_a)

# ObjectIds get serialized to an object, let's fix that for both mongoid 3.x
module BSON
  class ObjectId
    alias :to_json :to_s
    alias :as_json :to_s
  end
end

# and 4.x (just in case)
module Moped
  module BSON
    class ObjectId
      alias :to_json :to_s
      alias :as_json :to_s
    end
  end
end
