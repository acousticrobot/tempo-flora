import gql from 'graphql-tag'

const DAYS_DEEDS = gql`
  query DaysSince($since: String!, $to: String){
    days(since: $since, to: $to) {
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

export default DAYS_DEEDS
