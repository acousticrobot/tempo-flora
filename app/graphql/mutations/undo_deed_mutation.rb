require_relative "../../services/undo_deed"

module Mutations
  class UndoDeedMutation < GraphQL::Schema::RelayClassicMutation

    argument :deed_id, ID, required: true

    # return fields
    field :focus, Types::FocusType, null: false
    field :user, Types::UserType, null: false

    def resolve(deed_id:)
      deed = Deed.find(deed_id)
      user = context[:current_user]
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
    end
  end
end
