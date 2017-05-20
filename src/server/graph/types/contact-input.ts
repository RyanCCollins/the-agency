import {
  GraphQLInputObjectType,
  GraphQLString,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'ContactInput',
  fields: () => ({
    email: { type: GraphQLString },
    name: { type: GraphQLString },
    message: { type: GraphQLString },
  }),
});
