module Types
  class DeedType < Types::BaseObject

    field :id, ID, null: false
    field :user_id, Integer, null: false
    field :title, String, null: false
    field :focus_title, String, null: true
    field :points, Integer, null: false
    field :position, Integer, null: false
    field :completed_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
