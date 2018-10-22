import gql from 'graphql-tag'

const UNDO_DEED = gql`
mutation undoDeed($deedId: ID!) {
  undoDeed(input: {deedId: $deedId}) {
    focus {
      id
      tasks {
        id
        title
        points
        repeatable
      }
      deeds {
        id
        title
        focus_title
        points
        completed_at
      }
    }
  }
}`

export default UNDO_DEED
