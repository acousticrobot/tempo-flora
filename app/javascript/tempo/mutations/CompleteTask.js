import gql from 'graphql-tag'

const COMPLETE_TASK = gql`
mutation CompleteTaskMutation($taskId: ID!, $deedsSince: String) {
  CompleteTaskMutation(input: {taskId: $taskId}) {
    focus {
      id
      tasks {
        id
        title
        points
        repeatable
      }
      deeds(since: $deedsSince) {
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
