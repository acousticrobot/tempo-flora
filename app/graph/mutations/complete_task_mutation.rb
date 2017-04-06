require_relative "../../services/complete_task"

CompleteTaskMutation = GraphQL::Relay::Mutation.define do

  name "CompleteTask"

  input_field :taskId, !types.ID

  return_field :focus, FocusType
  return_field :user, UserType

  resolve ->(object, args, ctx) {

    task = Task.find(args[:taskId])
    focus = task.focus
    user = ctx[:current_user]

    result = Services::CompleteTask.new(
      task: task,
      user:  ctx[:current_user]
    ).execute

    if result.success?
      response = {
        focus: focus,
        user: user
      }
    else
      GraphQL::ExecutionError.new(result.message)
    end
  }
end
