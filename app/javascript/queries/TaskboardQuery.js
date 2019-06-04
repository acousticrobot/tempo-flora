import gql from 'graphql-tag'

const TASKBOARD_QUERY = gql`
  query TaskboardQuery($userId: ID!, $deedsSince: String) {
    user(id: $userId) {
      id
      username
      theme
    }
    foci {
      id
      title
      position
      color
      tasks {
        id
        title
        points
        repeatable
        position
      }
      deeds(since: $deedsSince) {
        id
        title
        focusTitle
        points
        completedAt
      }
    }
    __type(name: "Themes") {
      enumValues {
        name
      }
    }
  }
`

export default TASKBOARD_QUERY
