require_relative "../../services/add_new_focus"

module Mutations
  class AddFocusMutation < GraphQL::Schema::RelayClassicMutation

    argument :title, String, required: true

    # return fields
    field :focus, Types::FocusType, null: false
    field :user, Types::UserType, null: false

    def resolve(title:)
      result = Services::AddNewFocus.new(
        title: title,
        user:  context[:current_user]
      ).execute

      if result.success?
        response = {
          focus: result[:focus],
          user: result[:user]
        }
      else
        GraphQL::ExecutionError.new(result.message)
      end
    end
  end
end
