module Types
  class MutationType < Types::BaseObject
    field :AddFocusMutation, mutation: Mutations::AddFocusMutation
    field :AddTaskMutation, mutation: Mutations::AddTaskMutation
    field :ChangeDeedPointsMutation, mutation: Mutations::ChangeDeedPointsMutation
    field :MoveTaskMutation, mutation: Mutations::MoveTaskMutation
    field :CompleteTaskMutation, mutation: Mutations::CompleteTaskMutation
    field :DeleteTaskMutation, mutation: Mutations::DeleteTaskMutation
    field :UndoDeedMutation, mutation: Mutations::UndoDeedMutation
    field :ChangeThemeMutation, mutation: Mutations::ChangeThemeMutation
  end
end
