PostType = GraphQL::ObjectType.define do
  name 'Post'
  description 'Post type'
  field :id, !types.ID, 'The id of the post'
  field :title, !types.String, 'The title of the post'
  field :slug, !types.String, 'The slug for the post'
  field :body, types.String, 'The body of the post'
end