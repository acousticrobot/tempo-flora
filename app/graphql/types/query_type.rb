module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :deed, Types::DeedType, null: true do
      description "a completed task record"
      argument :id, ID, required: true
    end
    def deed(id:)
      context[:current_user].deeds.find(id)
    end

    field :deeds, [Types::DeedType], null: true do
      description "all completed task records"
    end
    def deeds
      context[:current_user].deeds.all
    end

    field :focus, Types::FocusType, null: true do
      description "a focus record"
      argument :id, ID, required: true
    end
    def focus(id:)
      context[:current_user].foci.find(id)
    end

    field :foci, [Types::FocusType], null: true do
      description "all focus records"
    end
    def foci
      context[:current_user].foci.all
    end

    field :task, Types::TaskType, null: true do
      description "a task record"
      argument :id, ID, required: true
    end
    def task(id:)
      context[:current_user].tasks.find(id)
    end

    field :tasks, [Types::TaskType], null: true do
      description "all task records"
    end
    def tasks
      context[:current_user].tasks.all
    end

    field :user, Types::UserType, null: true do
      description "entry point for current user settings and data"
      argument :id, ID, required: true
    end
    def user(id:)
      context[:current_user] if id == context[:current_user].id.to_s
    end
  end
end
