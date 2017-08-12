RootQueryType = GraphQL::ObjectType.define do
  name 'RootQuery'
  description 'The root level query type'

  field :users, types[UserType], field: FieldGenerator::CreateField.all(type: types[UserType], model: User)
  field :user, UserType, field: FieldGenerator::CreateField.one(type: UserType, model: User)
  field :projects, types[ProjectType], field: FieldGenerator::CreateField.all(type: types[ProjectType], model: Project)
  field :project, ProjectType, field: FieldGenerator::CreateField.one(type: ProjectType, model: Project)
end
