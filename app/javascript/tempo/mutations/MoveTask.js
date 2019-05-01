import gql from 'graphql-tag'

const MOVE_TASK = gql`
mutation MoveTaskMutation($taskId: ID!, $focusId: ID! $position: Int!) {
  MoveTaskMutation(
    input: {
      taskId: $taskId,
      focusId: $focusId,
      position: $position,
    }) {
    foci {
      id
      tasks {
        id
        position
      }
    }
  }
}`

export default MOVE_TASK
