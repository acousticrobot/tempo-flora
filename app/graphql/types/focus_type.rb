require 'chronic'

module Types
  class FocusType < Types::BaseObject

    field :id, ID, null: false
    field :title, String, null: false
    field :position, Integer, null: false
    field :color, String, null: false

    field :tasks, [Types::TaskType], null: true
    def tasks
      object.tasks.order_by_position
    end
    field :deeds, [Types::DeedType], null: true do
      argument :since, String, default_value: "yesterday midnight", required: false,
        prepare: ->(since, ctx) {
          since = Chronic.parse(since)
          since = since || Date.today
        }
      argument :to, String, default_value: "today midnight", required: false,
        prepare: ->(to, ctx) {
          to = Chronic.parse(to)
          to = to || Date.tomorrow
        }
    end
    def deeds(since:, to:)
      object.deeds.since(since).until(to)
    end
  end
end
