import gql from 'graphql-tag';

export default gql`
  query Clients {
    clients {
      name
      image
    }
  }
`;
