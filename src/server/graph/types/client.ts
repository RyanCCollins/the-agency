import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
    url: { type: GraphQLString },
  }),
});
