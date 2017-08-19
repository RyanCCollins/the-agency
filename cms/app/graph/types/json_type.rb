JsonType = GraphQL::ScalarType.define do
  name 'JSON'
  description 'JSON Scalar Type, representing the Postgres jsonb data type.  Useful for representing hierarchical data.'
  coerce_input -> (x, _) { JSON.parse(x) }
  coerce_result -> (x, _) { JSON.dump(x) }
end
