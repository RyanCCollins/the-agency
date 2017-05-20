
import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Contact',
  fields: () => ({
    email: { type: GraphQLString },
    name: { type: GraphQLString },
    message: { type: GraphQLString },
  }),
});
