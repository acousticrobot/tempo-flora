import gql from 'graphql-tag'

const DELETE_TASK = gql`
mutation deleteTask($taskId: ID!) {
  deleteTask(input: {taskId: $taskId}) {
    focus {
      id
      tasks {
        id
        title
        points
        repeatable
      }
    }
  }
}`

export default DELETE_TASK
