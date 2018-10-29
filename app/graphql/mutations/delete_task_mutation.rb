module Mutations
  class DeleteTaskMutation < GraphQL::Schema::RelayClassicMutation

    argument :task_id, ID, required: true

    # return fields
    field :focus, Types::FocusType, null: false
    field :user, Types::UserType, null: false

    def resolve(task_id:)
      task = Task.find(task_id)
      focus = task.focus
      user = context[:current_user]

      if task.user == user
        if task.destroy
          response = {
            focus: focus,
            user: user
          }
        else
          GraphQL::ExecutionError.new(task.errors.messages)
        end
      else
         GraphQL::ExecutionError.new("Task does not belong to user.")
      end
    end
  end
end
