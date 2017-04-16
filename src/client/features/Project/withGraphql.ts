import { graphql } from 'react-apollo';
import PROJECT_QUERY from './project.graphql';

export default graphql(PROJECT_QUERY, {
  skip: ({ params }) => !params || (params && !params.id),
  options: ({ params }) => ({
    variables: {
      id: params.id,
    },
  }),
  props: ({ data: { loading, project, error, refetch } }) => ({
    loading,
    project,
    error,
    refetch,
  }),
});
