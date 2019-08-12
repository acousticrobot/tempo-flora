import gql from 'graphql-tag'

const GET_FOCI = gql`
  query GetFoci($deedsSince: String) {
    foci {
      id
      title
      position
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
        position
      }
    }
  }
`

export default GET_FOCI
