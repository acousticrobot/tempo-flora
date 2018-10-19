import gql from 'graphql-tag';

const FOCUS_FILTER_QUERY = gql`
  query getFocusFilter{
    focusFilter @client {
      filter
      focusId
    }
  }
`

export default FOCUS_FILTER_QUERY
