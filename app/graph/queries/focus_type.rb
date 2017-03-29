FocusType = GraphQL::ObjectType.define do
  name "Focus"
  description "Area of Focus"
  field :id, !types.ID
  global_id_field :_id
  field :title, !types.String
  field :position, !types.Int
  field :tasks, types[TaskType] do
    resolve -> (obj, args, ctx) {
      obj.tasks.order_by_creation
    }
  end
end
