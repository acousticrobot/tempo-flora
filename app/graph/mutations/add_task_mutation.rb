AddTaskMutation = GraphQL::Relay::Mutation.define do
  # Used to name derived types, eg `"AddTaskInput"`:
  name "AddTask"

  # Accessible from `args` in the resolve function:
  input_field :focusId, !types.ID
  input_field :title, !types.String

  return_field :task, TaskType

  # The resolve proc is where you alter the system state.
  resolve ->(object, args, ctx) {
    focus = Focus.find(args[:focusId])
    user = ctx[:current_user]
    if focus.user == user
      task = Task.new(
        user: user,
        focus: focus,
        title: args[:title],
        points: 5
      )

      task.save!

      response = {
        task: task,
      }
    end
    # else return error
  }
end
