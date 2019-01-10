import gql from 'graphql-tag'

const ROOT_QUERY = gql`
  query RootQuery($userId: ID!, $deedsSince: String) {
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

export default ROOT_QUERY