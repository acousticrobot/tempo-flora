import gql from 'graphql-tag'

const GET_FOCI = gql`
  query GetFoci {
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
`

export default GET_FOCI
