import gql from 'graphql-tag'

const GET_THEMES_QUERY = gql`
  query getThemes {
    themes @client {
      options
    }
  }
`
export default GET_THEMES_QUERY
