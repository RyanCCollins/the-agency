ProjectType = GraphQL::ObjectType.define do
  name 'Project'
  description 'A project / case study'
  field :id, !types.ID, 'The id of the project'
  field :title, !types.String, 'The title of the project'
  field :content, types[JsonType], 'The content of the project, array of JSON'
end