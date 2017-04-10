import gql from 'graphql-tag';

const AddFocusMutation = gql`
mutation addFocus($title: String){
  addFocus(input: {title: $title}) {
    focus {
      _id
      id
      title
      position
      tasks {
        _id
      }
      deeds {
        id
        _id
        title
        focus_title
        points
        completed_at
      }
    }
  }
}`;

export default AddFocusMutation;
