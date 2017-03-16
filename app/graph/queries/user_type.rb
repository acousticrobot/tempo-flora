UserType = GraphQL::ObjectType.define do
  name "User"
  description "User"
  field :id, !types.ID
  field :username, !types.String
  field :email, !types.String
  field :foci, types[FocusType]
  field :tasks, types[TaskType]
end
