module Mutations
  class AddTaskMutation < GraphQL::Schema::RelayClassicMutation

    argument :focus_id, ID, required: true
    argument :title, String, required: false
    argument :points, Int, required: false
    argument :repeatable, Boolean, required: false

    # return fields
    field :task, Types::TaskType, null: false
    field :focus, Types::FocusType, null: false
    field :user, Types::UserType, null: false

    def resolve(focus_id:, title:, points:, repeatable:)
      focus = Focus.find(focus_id)
      title = !title.empty? && title || "a new task"
      points = points || 1
      repeatable = repeatable || false

      user = context[:current_user]
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
    end
  end
end
