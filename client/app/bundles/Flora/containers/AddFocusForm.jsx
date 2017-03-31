import React, { PropTypes } from 'react';
import { graphql } from 'react-apollo';
import update from 'immutability-helper';

import AddFocusMutation from  '../mutations/AddFocusMutation';

const AddFocusForm = ({ clearNewFocus, addNewFocus, AddFocusMutation }) => {
  let titleInput, pointsInput, repeatableInput;

  const CSS = (type='')=> (`form--${type} form--${type}_small`);

  const handleAddFocus = (title)=> {
    addNewFocus();
    AddFocusMutation({
      variables: { title },
      updateQueries: {
          RootQuery: (prev, {mutationResult}) => {
            const newFocus = mutationResult.data.addFocus.focus;
            var u = update;
            return update(prev, {
              user: {
                foci: {
                  $push: [newFocus],
                }
              }
            });
          }
        }
    }).then(({ data }) => {
        clearNewFocus();
      }).catch((error) => {
        console.log('there was an error sending the query', error);
        clearNewFocus();
      });
  };

  return (
    <article className="focus-article form form_small">
      <form onSubmit={ e => {
        e.preventDefault();
        handleAddFocus(titleInput.value);
      }}>
        <label className={ CSS('label') } htmlFor="title-input">
          Focus Description:
        </label>
        <input id="title-input" type="text" className={ CSS('input') } ref={node => {
          titleInput = node;
        }} />

        <div className="clear"></div>

        <button type="submit" className={ CSS('button') } >
          Add Focus
        </button>

        <button
          className={ CSS('button') }
          onClick={
            () => { clearNewFocus();
          }}>
          Cancel
        </button>

      </form>
    </article>
  );
};

AddFocusForm.propTypes = {
  addNewFocus: PropTypes.func.isRequired,
  clearNewFocus: PropTypes.func.isRequired,
  AddFocusMutation: PropTypes.func.isRequired
};

// mutations available through this.props
const AddFocusWithGraph =  graphql(AddFocusMutation, {
  name: 'AddFocusMutation'
})(AddFocusForm);


export default AddFocusWithGraph;
