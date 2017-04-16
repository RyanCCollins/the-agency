import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import queries from './queries';

const RootQuery: GraphQLObjectType = new GraphQLObjectType({
  name: 'Query',
  fields: () => queries,
});

export default new GraphQLSchema({
  query: RootQuery,
});
