import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import queries from './queries';
import mutations from './mutations';

const RootQuery: GraphQLObjectType = new GraphQLObjectType({
  name: 'Query',
  fields: () => queries,
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => mutations,
  }),
});
