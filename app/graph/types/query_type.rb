QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root for this schema"

  field :focus do
    type FocusType
    argument :id, !types.ID
    resolve -> (obj, args, ctx) {
      Focus.find(args[:id])
    }
  end

  field :task do
    type TaskType
    argument :id, !types.ID
    resolve -> (obj, args, ctx) {
      Task.find(args[:id])
    }
  end

  field :user do
    type UserType
    argument :id, !types.ID
    resolve -> (obj, args, ctx) {
      User.find(args[:id])
    }
  end
end
