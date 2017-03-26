CompleteTaskMutation = GraphQL::Relay::Mutation.define do
  # Used to name derived types, eg `"AddTaskInput"`:
  name "CompleteTask"

  input_field :taskId, !types.ID

  return_field :task, TaskType
  return_field :focus, FocusType
  return_field :user, UserType

  resolve ->(object, args, ctx) {
    task = Task.find(args[:taskId])

    if !task.completed?
      if task.repeatable?
        new_task = task.dup
        new_task.save
      end

      task.update(completed: true)
    end

    response = {
      task: task,
      focus: task.focus,
      user: task.user
    }
  }
end
