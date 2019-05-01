module Mutations
  class MoveTaskMutation < GraphQL::Schema::RelayClassicMutation

    argument :task_id, ID, required: true
    argument :focus_id, ID, required: true
    argument :position, Int, required: true

    # return fields
    field :focus, Types::FocusType, null: false
    field :foci, [Types::FocusType], null: true
    field :user, Types::UserType, null: false

    def resolve(task_id:, focus_id:, position:)
      task = Task.find(task_id)
      destination_focus = Focus.find(focus_id)

      user = context[:current_user]
      if (task.user == user) && (destination_focus.user == user)
        if task.focus != destination_focus
          task.remove_from_list
          task.focus = destination_focus
        end
        task.set_list_position(position)
        if task.save
          response = {
            foci: user.foci,
            focus: destination_focus,
            user: user
          }
        else
          GraphQL::ExecutionError.new(task.errors.messages)
        end
      else
        GraphQL::ExecutionError.new("User does not have permission to make this change.")
      end
    end
  end
end
