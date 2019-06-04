import gql from 'graphql-tag'

const DELETE_TASK = gql`
mutation DeleteTaskMutation($taskId: ID!) {
  DeleteTaskMutation(input: {taskId: $taskId}) {
    focus {
      id
      tasks {
        id
        title
        points
        repeatable
        position
      }
    }
  }
}`

export default DELETE_TASK
