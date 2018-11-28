require_relative "../../services/complete_task"

module Mutations
  class CompleteTaskMutation < GraphQL::Schema::RelayClassicMutation

    argument :task_id, ID, required: true

    # return fields
    field :focus, Types::FocusType, null: false
    field :user, Types::UserType, null: false

    def resolve(task_id:)
      task = Task.find(task_id)
      focus = task.focus
      user = context[:current_user]

      result = Services::CompleteTask.new(
        task: task,
        user:  user
      ).execute

      if result.success?
        response = {
          focus: focus,
          user: user
        }
      else
        GraphQL::ExecutionError.new(result.message)
      end
    end
  end
end