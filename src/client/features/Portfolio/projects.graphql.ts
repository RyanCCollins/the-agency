import gql from 'graphql-tag';
const query = gql`
  query Projects {
    projects {
      id: _id
      title
      image
    }
  }
`;

export default query;
