module Types
  class FocusType < Types::BaseObject

    field :id, ID, null: false
    field :title, String, null: false
    field :position, Integer, null: false

    field :tasks, [Types::TaskType], null: true
    field :deeds, [Types::DeedType], null: true
  end
end
