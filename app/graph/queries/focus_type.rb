FocusType = GraphQL::ObjectType.define do
  name "Focus"
  description "Area of Focus"
  field :id, !types.ID
  field :title, !types.String
  field :position, !types.Int
  field :tasks, types[TaskType]
end
