import gql from 'graphql-tag'

const ADD_FOCUS = gql`
mutation addFocus($title: String){
  addFocus(input: {title: $title}) {
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
        focus_title
        points
        completed_at
      }
    }
  }
}`

export default ADD_FOCUS
