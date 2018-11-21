require 'chronic'

module Types
  class FocusType < Types::BaseObject

    field :id, ID, null: false
    field :title, String, null: false
    field :position, Integer, null: false

    field :tasks, [Types::TaskType], null: true
    field :deeds, [Types::DeedType], null: true do
      argument :since, String, default_value: "yesterday midnight", required: false,
      prepare: ->(since, ctx) {
        since = Chronic.parse(since)
        since = since || Date.today
      }
    end
    def deeds(since:)
      object.deeds.since(since)
    end
  end
end
