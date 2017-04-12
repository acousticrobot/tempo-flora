import gql from 'graphql-tag';

const UndoDeedMutation = gql`
mutation undoDeed($deedId: ID!) {
  undoDeed(input: {deedId: $deedId}) {
    focus {
      _id
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
        completed_at
      }
    }
  }
}`;

export default UndoDeedMutation;
