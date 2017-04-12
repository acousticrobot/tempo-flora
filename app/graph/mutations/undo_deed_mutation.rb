require_relative "../../services/undo_deed"

UndoDeedMutation = GraphQL::Relay::Mutation.define do

  name "UndoDeed"

  input_field :deedId, !types.ID

  return_field :focus, FocusType
  return_field :user, UserType

  resolve ->(object, args, ctx) {

    deed = Deed.find(args[:deedId])
    user = ctx[:current_user]
    focus = user.foci.where(position: deed.position).first

    result = Services::UndoDeed.new(
      deed: deed,
      focus: focus,
      user:  user
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
