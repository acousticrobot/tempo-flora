class TempoFloraSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)

  def self.id_from_object(object, type_definition, query_ctx)
    GraphQL::Schema::UniqueWithinType.encode(type_definition.name, object.id)
  end

  def self.object_from_id(node_id, query_ctx)
    type_name, item_id = GraphQL::Schema::UniqueWithinType.decode(node_id)
  end
end
