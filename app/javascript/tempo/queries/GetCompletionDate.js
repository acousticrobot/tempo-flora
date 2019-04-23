import gql from 'graphql-tag'

const GET_COMPLETION_DATE_QUERY = gql`
  query getCompletionDate{
    completedAt @client
  }
`

export default GET_COMPLETION_DATE_QUERY
