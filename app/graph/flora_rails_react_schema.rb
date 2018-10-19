FloraRailsReactSchema = GraphQL::Schema.define do
  query QueryRoot
  mutation MutationRoot

  id_from_object ->(object, type_definition, query_ctx) {
      GraphQL::Schema::UniqueWithinType.encode(type_definition.name, object.id)
    }

  object_from_id ->(id, query_ctx) {
    type_name, item_id = GraphQL::Schema::UniqueWithinType.decode(id)
  }
end
