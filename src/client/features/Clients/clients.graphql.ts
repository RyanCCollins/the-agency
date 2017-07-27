import gql from 'graphql-tag';

const query = gql`
  query Clients {
    clients {
      name
      url
      image
    }
  }
`

export default query;
