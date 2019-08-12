import gql from 'graphql-tag'

const ADD_FOCUS = gql`
mutation AddFocusMutation($title: String!){
  AddFocusMutation(input: {title: $title}) {
    focus {
      id
      title
      position
      color
      tasks {
        id
        title
        points
        repeatable
        position
      }
      deeds {
        id
        title
        focusTitle
        points
        completedAt
        position
      }
    }
  }
}`

export default ADD_FOCUS
