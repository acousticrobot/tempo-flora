import gql from 'graphql-tag'

const ADD_FOCUS = gql`
mutation AddFocusMutation($title: String!){
  AddFocusMutation(input: {title: $title}) {
    focus {
      id
      title
      position
      tasks {
        id
        title
        points
        repeatable
      }
      deeds {
        id
        title
        focusTitle
        points
        completedAt
      }
    }
  }
}`

export default ADD_FOCUS
