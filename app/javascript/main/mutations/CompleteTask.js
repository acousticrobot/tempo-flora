import gql from 'graphql-tag'

const COMPLETE_TASK = gql`
mutation completeTask($taskId: ID!) {
  completeTask(input: {taskId: $taskId}) {
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
        focus_title
        points
        completed_at
      }
    }
  }
}`

export default COMPLETE_TASK
