import gql from 'graphql-tag';

const AddTaskMutation = gql`
mutation addTask($focusId: ID!, $title: String, $points: Int){
  addTask(input: {focusId: $focusId, title: $title, points: $points}) {
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
