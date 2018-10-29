module Types
  class UserType < Types::BaseObject

    field :id, ID, null: false
    field :username, String, null: false
    field :email, String, null: false
    field :theme, String, null: true

    field :foci, [Types::FocusType], null: true
    field :tasks, [Types::TaskType], null: true
    field :deeds, [Types::DeedType], null: true
  end
end
