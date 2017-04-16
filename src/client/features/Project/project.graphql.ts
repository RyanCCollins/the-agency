import gql from 'graphql-tag';

export default gql`
  query Project($id: ID!) {
    project(id: $id) {
      id: _id
      title
      image
      content
    }
  }
`;
