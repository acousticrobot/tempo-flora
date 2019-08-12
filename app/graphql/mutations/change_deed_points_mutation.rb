module Mutations
  class ChangeDeedPointsMutation < GraphQL::Schema::RelayClassicMutation

    argument :deed_id, ID, required: true
    argument :points, Int, required: true

    # return fields
    field :deed, Types::DeedType, null: false

    def resolve(deed_id:, points:)
      deed = Deed.find(deed_id)
      user = context[:current_user]

      if (deed.user == user)
        deed.points = points
        if deed.save
          response = {
            deed: deed
          }
        else
          GraphQL::ExecutionError.new(result.message)
        end
      else
        GraphQL::ExecutionError.new("User does not have permission to make this change.")
      end
    end
  end
end
