require_relative "../../services/complete_task"

module Mutations
  class CompleteTaskMutation < GraphQL::Schema::RelayClassicMutation

    argument :task_id, ID, required: true
    # for sending a past day in string:
    argument :completed_at, String, required: false
    # for computing consecutive days:
    argument :local_start_of_day, String, required: false

    # return fields
    field :focus, Types::FocusType, null: false
    field :user, Types::UserType, null: false

    def resolve(task_id:, completed_at:, local_start_of_day:)
      task = Task.find(task_id)
      focus = task.focus
      user = context[:current_user]

      result = Services::CompleteTask.new(
        task: task,
        user:  user,
        completed_at: completed_at,
        local_start_of_day: local_start_of_day
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
