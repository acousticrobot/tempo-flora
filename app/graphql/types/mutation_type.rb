module Types
  class MutationType < Types::BaseObject
    field :AddFocusMutation, mutation: Mutations::AddFocusMutation
    field :AddTaskMutation, mutation: Mutations::AddTaskMutation
    field :CompleteTaskMutation, mutation: Mutations::CompleteTaskMutation
    field :DeleteTaskMutation, mutation: Mutations::DeleteTaskMutation
    field :UndoDeedMutation, mutation: Mutations::UndoDeedMutation
  end
end
