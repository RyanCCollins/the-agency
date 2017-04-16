import gql from 'graphql-tag';

export default gql`
  query Projects {
    projects {
      id: _id
      title
      image
      content
    }
  }
`;
