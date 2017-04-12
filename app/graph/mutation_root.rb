# Define the mutation type
MutationRoot = GraphQL::ObjectType.define do
  name "Mutation"
  description "the mutation root for this schema"

  field :addFocus, field: AddFocusMutation.field
  field :addTask, field: AddTaskMutation.field
  field :completeTask, field: CompleteTaskMutation.field
  field :undoDeed, field: UndoDeedMutation.field
end
