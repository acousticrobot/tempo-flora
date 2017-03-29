AddTaskMutation = GraphQL::Relay::Mutation.define do
  # Used to name derived types, eg `"AddTaskInput"`:
  name "AddTask"

  # Accessible from `args` in the resolve function:
  input_field :focusId, !types.ID
  input_field :title, types.String
  input_field :points, types.Int
  input_field :repeatable, types.Boolean

  return_field :task, TaskType
  return_field :focus, FocusType
  return_field :user, UserType

  # The resolve proc is where you alter the system state.
  resolve ->(object, args, ctx) {

    focus = Focus.find(args[:focusId])
    title = args[:title] || "a new task"
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
      task.save!

      response = {
        task: task,
        focus: focus,
        user: focus.user
      }
    end
    # else return error
  }
end
