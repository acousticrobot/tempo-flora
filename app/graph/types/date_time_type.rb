DateTimeType = GraphQL::ScalarType.define do
  name "DateTime"
  description "DateTime since epoch in seconds"

  coerce_input ->(value) { DateTime.parse(value) }
  coerce_result ->(value) { value }
end
