import gql from 'graphql-tag'

const UNDO_DEED = gql`
mutation UndoDeedMutation($deedId: ID!, $deedsTo: String, $deedsSince: String) {
  UndoDeedMutation(input: {deedId: $deedId}) {
    focus {
      id
      tasks {
        id
        title
        points
        repeatable
        position
      }
      deeds(since: $deedsSince, to: $deedsTo) {
        id
        title
        focusTitle
        points
        completedAt
        position
      }
    }
  }
}`

export default UNDO_DEED
