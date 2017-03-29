import gql from 'graphql-tag';

const RootQuery = gql`
query RootQuery($userId: ID!) {
  user(id: $userId) {
    id
    _id
    username
    foci {
      id
      _id
      title
      position
      tasks {
        id
        _id
        title
        points
        completed
        repeatable
      }
    }
  }
}`;

export default RootQuery;
