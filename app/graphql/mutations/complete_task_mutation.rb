require_relative "../../services/complete_task"

module Mutations
  class CompleteTaskMutation < GraphQL::Schema::RelayClassicMutation

    argument :task_id, ID, required: true
    argument :completed_at, String, required: false

    # return fields
    field :focus, Types::FocusType, null: false
    field :user, Types::UserType, null: false

    def resolve(task_id:, completed_at:)
      task = Task.find(task_id)
      focus = task.focus
      user = context[:current_user]

      result = Services::CompleteTask.new(
        task: task,
        user:  user,
        completed_at: completed_at
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
