require_relative "../../services/add_new_focus"

AddFocusMutation = GraphQL::Relay::Mutation.define do

  name "AddFocus"

  input_field :title, types.String

  return_field :focus, FocusType
  return_field :user, UserType

  resolve ->(object, args, ctx) {

    result = Services::AddNewFocus.new(
      title: args[:title],
      user:  ctx[:current_user]
    ).execute

    if result.success?
      response = {
        focus: result[:focus],
        user: result[:user]
      }
    else
      GraphQL::ExecutionError.new(result.message)
    end
  }
end
