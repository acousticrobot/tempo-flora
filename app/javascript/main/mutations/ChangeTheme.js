import gql from 'graphql-tag'

const CHANGE_THEME = gql`
mutation ChangeThemeMutation($name: Themes!) {
  ChangeThemeMutation(input: {name: $name}) {
    user {
      id
      theme
    }
  }
}`

export default CHANGE_THEME
