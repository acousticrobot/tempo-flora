import gql from 'graphql-tag'

const CHANGE_DEED_POINTS = gql`
mutation ChangeDeedPointsMutation($deedId: ID!, $points: Int!) {
  ChangeDeedPointsMutation(
    input: {
      deedId: $deedId,
      points: $points,
    }) {
    deed {
      id
      points
    }
  }
}`

export default CHANGE_DEED_POINTS
