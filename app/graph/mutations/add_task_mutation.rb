AddTaskMutation = GraphQL::Relay::Mutation.define do
  name "AddTask"

  # Accessible from `args` in the resolve function:
  input_field :focusId, !types.ID
  input_field :title, types.String
  input_field :points, types.Int
  input_field :repeatable, types.Boolean

  return_field :task, TaskType
  return_field :focus, FocusType
  return_field :user, UserType

  resolve ->(object, args, ctx) {

    focus = Focus.find(args[:focusId])
    title = !args[:title].empty? && args[:title] || "a new task"
    points = args[:points] || 1
    repeatable = args[:repeatable] || false

    user = ctx[:current_user]
    if focus.user == user
      task = Task.new(
        user: focus.user,
        focus: focus,
        title: title,
        points: points,
        repeatable: repeatable
      )
      if task.save
        response = {
          task: task,
          focus: focus,
          user: focus.user
        }
      else
        GraphQL::ExecutionError.new(task.errors.messages)
      end
    else
      GraphQL::ExecutionError.new("Focus does not belong to user.")
    end
  }
end
