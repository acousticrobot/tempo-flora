TaskType = GraphQL::ObjectType.define do
  name "Task"
  description "Task in a Focus"
  field :id, !types.ID
  global_id_field :_id
  field :title, !types.String
  field :points, !types.Int
  field :repeatable, !types.Boolean
  field :completed, !types.Boolean
end
