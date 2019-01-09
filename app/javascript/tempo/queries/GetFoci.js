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
`

export default GET_FOCI
