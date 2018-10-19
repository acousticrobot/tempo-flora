import gql from 'graphql-tag';

const ADD_TASK = gql`
mutation addTask($focusId: ID!, $title: String, $points: Int, $repeatable: Boolean){
  addTask(input: {focusId: $focusId, title: $title, points: $points, repeatable: $repeatable}) {
    focus {
      id
      tasks {
        id
        title
        points
        repeatable
      }
    }
  }
}`;

export default ADD_TASK;
