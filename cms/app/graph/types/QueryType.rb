QueryType = GraphQL::ObjectType.define do
  name 'Query'
  description 'The root query type'
  field :posts, type: types[PostType] do
    resolve -> (_obj, _args, _ctx) do
      Post.all
    end
  end
end