import { graphql } from 'react-apollo';
import PROJECTS_QUERY from './projects.graphql';

export default graphql(PROJECTS_QUERY, {
  props: ({ data: { loading, projects, error } }) => ({
    loading,
    projects,
    error,
  }),
});
