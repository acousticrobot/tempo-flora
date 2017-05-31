require_relative "../../services/complete_task"

DeleteTaskMutation = GraphQL::Relay::Mutation.define do

  name "DeleteTask"

  input_field :taskId, !types.ID

  return_field :focus, FocusType
  return_field :user, UserType

  resolve ->(object, args, ctx) {

    task = Task.find(args[:taskId])
    focus = task.focus
    user = ctx[:current_user]

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
  }
end
