import gql from 'graphql-tag';

const CompleteTaskMutation = gql`
mutation completeTask($taskId: ID!) {
  completeTask(input: {taskId: $taskId}) {
    focus {
      _id
      tasks {
        id
        _id
        title
        points
        repeatable
      }
      deeds {
        id
        _id
        title
        focus_title
        points
        daystring
      }
    }
  }
}`;

export default CompleteTaskMutation;
