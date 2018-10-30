module Mutations
  class ChangeThemeMutation < GraphQL::Schema::RelayClassicMutation

    argument :name, Types::ThemesType, required: true

    # return fields
    field :theme, Types::ThemesType, null: false
    field :user, Types::UserType, null: false

    def resolve(name:)
      user = context[:current_user]
      if user.update(theme: name)
        response = {
          theme: name,
          user: user
        }
      else
        GraphQL::ExecutionError.new(user.errors.messages)
      end
    end
  end
end
