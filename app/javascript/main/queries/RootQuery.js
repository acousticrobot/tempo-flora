import gql from 'graphql-tag'

const ROOT_QUERY = gql`
  query RootQuery($userId: ID!) {
    user(id: $userId) {
      id
      username
      foci {
        id
        title
        position
        tasks {
          id
          title
          points
          repeatable
        }
        deeds {
          id
          title
          focusTitle
          points
          completedAt
        }
      }
    }
  }
`

export default ROOT_QUERY
