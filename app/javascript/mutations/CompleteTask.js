import gql from 'graphql-tag'

const COMPLETE_TASK = gql`
mutation CompleteTaskMutation($taskId: ID!, $deedsSince: String, $deedsTo: String, $completedAt: String, $localStartOfDay: String) {
  CompleteTaskMutation(input: {taskId: $taskId, completedAt: $completedAt, localStartOfDay: $localStartOfDay}) {
    targetDate @client @export(as: "deedsSince")
    targetEndDate @client @export(as: "deedsTo")
    focus {
      id
      tasks {
        id
        title
        points
        repeatable
        position
      }
      deeds(since: $deedsSince, to: $deedsTo) {
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

export default COMPLETE_TASK
