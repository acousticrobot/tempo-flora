UserType = GraphQL::ObjectType.define do
  name "User"
  description "User"
  field :id, !types.ID
  global_id_field :_id
  field :username, !types.String
  field :email, !types.String
  field :foci, types[FocusType]
  field :tasks, types[TaskType]
  field :deeds, types[DeedType]
end
