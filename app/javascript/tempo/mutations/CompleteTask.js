import gql from 'graphql-tag'

const COMPLETE_TASK = gql`
mutation CompleteTaskMutation($taskId: ID!, $deedsSince: String, $completedAt: String) {
  CompleteTaskMutation(input: {taskId: $taskId, completedAt: $completedAt}) {
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
