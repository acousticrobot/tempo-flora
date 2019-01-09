import gql from 'graphql-tag'

const UNDO_DEED = gql`
mutation UndoDeedMutation($deedId: ID!, $deedsSince: String) {
  UndoDeedMutation(input: {deedId: $deedId}) {
    focus {
      id
      tasks {
        id
        title
        points
        repeatable
      }
      deeds(since: $deedsSince) {
        id
        title
        focusTitle
        points
        completedAt
      }
    }
  }
}`

export default UNDO_DEED
