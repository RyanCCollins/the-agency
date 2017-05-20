import { graphql } from 'react-apollo';
import CLIENTS_QUERY from './clients.graphql';

export default graphql(CLIENTS_QUERY, {
  props: ({ data: { loading, clients, error } }) => ({
    loading,
    clients,
    error,
  }),
});
