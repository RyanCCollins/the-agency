RootQueryType = GraphQL::ObjectType.define do
  name 'RootQuery'
  description 'The root level query type'

  field :users, types[UserType], field: FieldGenerator::CreateField.all(type: types[UserType], model: User)
  field :user, UserType, field: FieldGenerator::CreateField.one(type: UserType, model: User)
end
