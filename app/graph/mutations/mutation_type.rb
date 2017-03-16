# Define the mutation type
MutationType = GraphQL::ObjectType.define do
  name "Mutation"
  description "the mutation root for this schema"

  field :addTask, field: AddTaskMutation.field
  field :completeTask, field: CompleteTaskMutation.field
end
