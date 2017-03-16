CompleteTaskMutation = GraphQL::Relay::Mutation.define do
  # Used to name derived types, eg `"AddTaskInput"`:
  name "CompleteTask"

  input_field :taskId, !types.ID

  return_field :task, TaskType

  resolve ->(object, args, ctx) {
    task = Task.find(args[:taskId])
    task.update(completed: true)

    response = {
      task: task,
    }
  }
end
