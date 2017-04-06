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
        repeatable
      }
      deeds {
        id
        _id
        title
        focus_title
        points
        daystring
      }
    }
  }
}`;

export default RootQuery;
