import gql from 'graphql-tag'

const GET_THEMES_QUERY = gql`
  query getThemes {
  __type(name: "Themes") {
    enumValues {
      name
    }
  }
}`

export default GET_THEMES_QUERY
