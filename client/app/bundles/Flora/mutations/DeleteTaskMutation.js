import gql from 'graphql-tag';

const DeleteTaskMutation = gql`
mutation deleteTask($taskId: ID!) {
  deleteTask(input: {taskId: $taskId}) {
    focus {
      _id
      tasks {
        id
        _id
        title
        points
        repeatable
      }
    }
  }
}`;

export default DeleteTaskMutation;
