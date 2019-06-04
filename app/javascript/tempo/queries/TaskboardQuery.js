import gql from 'graphql-tag'

const TASKBOARD_QUERY = gql`
  query getTaskboard{
    optionsFilter @client
    completedAt @client
    focusFilter @client {
      filter
      focusId
    }
  }
`

export default TASKBOARD_QUERY
