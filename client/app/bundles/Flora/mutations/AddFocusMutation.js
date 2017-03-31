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
    }
  }
}`;

export default AddFocusMutation;
