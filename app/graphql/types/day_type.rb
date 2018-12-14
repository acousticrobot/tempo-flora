module Types
  class DayType < Types::BaseObject
    field :start_of_day, GraphQL::Types::ISO8601DateTime, null: false
    field :end_of_day, GraphQL::Types::ISO8601DateTime, null: false
    field :deeds, [Types::DeedType], null: true
    field :total_points, Integer, null: true
  end
end
