DeedType = GraphQL::ObjectType.define do
  name "Deed"
  description "Completed Deed"
  field :id, !types.ID
  global_id_field :_id
  field :title, !types.String
  field :focus_title, !types.String
  field :daystring, !types.String
  field :points, !types.Int
  field :position, !types.Int
end
