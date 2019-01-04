import gql from 'graphql-tag'

const ROOT_QUERY = gql`
  query DaysSince($since: String!){
    days(since: $since) {
      startOfDay
      endOfDay
      deeds {
        id
        title
        focusTitle
        points
        position
        completedAt
      }
      totalPoints
    }
    foci {
      title
      position
      color
    }
  }
`

export default ROOT_QUERY
