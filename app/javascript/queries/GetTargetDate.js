import gql from 'graphql-tag'

const GET_TARGET_DATE_QUERY = gql`
  query getCompletionDate{
    targetDate @client
  }
`

export default GET_TARGET_DATE_QUERY
