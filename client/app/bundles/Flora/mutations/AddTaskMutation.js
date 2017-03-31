import gql from 'graphql-tag';

const AddTaskMutation = gql`
mutation addTask($focusId: ID!, $title: String, $points: Int, $repeatable: Boolean){
  addTask(input: {focusId: $focusId, title: $title, points: $points, repeatable: $repeatable}) {
    focus {
      _id
      tasks {
        id
        _id
        title
        points
        completed
        repeatable
      }
    }
  }
}`;

export default AddTaskMutation;
