import gql from 'graphql-tag'

const COMPLETE_TASK = gql`
mutation CompleteTaskMutation($taskId: ID!) {
  CompleteTaskMutation(input: {taskId: $taskId}) {
    focus {
      id
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

export default COMPLETE_TASK
