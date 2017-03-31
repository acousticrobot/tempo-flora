AddFocusMutation = GraphQL::Relay::Mutation.define do
  # Used to name derived types, eg `"AddFocusInput"`:
  name "AddFocus"

  # Accessible from `args` in the resolve function:
  input_field :title, types.String

  return_field :focus, FocusType
  return_field :user, UserType

  # The resolve proc is where you alter the system state.
  resolve ->(object, args, ctx) {

    title = args[:title] || "new focus"
    user = ctx[:current_user]

    focus = Focus.new(
      user: user,
      title: title,
    )
    focus.save!

    response = {
      focus: focus,
      user: focus.user
    }
  }
end
