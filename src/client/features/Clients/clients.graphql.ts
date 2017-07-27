import gql from 'graphql-tag';

export default gql`
  query Clients {
    clients {
      name
      url
      image
    }
  }
`;
