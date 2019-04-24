import gql from 'graphql-tag'

const DASHBOARD_QUERY = gql`
  query getDashboard{
    optionsFilter @client
    completedAt @client
    focusFilter @client {
      filter
      focusId
    }
  }
`

export default DASHBOARD_QUERY
