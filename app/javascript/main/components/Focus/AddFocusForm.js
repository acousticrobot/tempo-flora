import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from "react-apollo";
import ADD_FOCUS from '../../mutations/AddFocus'
import ROOT_QUERY from '../../queries/RootQuery'

const AddFocusForm = ({ userId, closeFocusForm }) => {
  let titleInput;

  const CSS = (type='') => (`form--${type} form--${type}_small`);

  const handleAddFocus = (e, addFocus) => {
    e.preventDefault()
    addFocus({
      variables: {
        title : titleInput.value,
      }
    })
    closeFocusForm()
  }

  return (
    <article className="focus-article form form_small">
      <Mutation mutation={ ADD_FOCUS }
                refetchQueries={ [{ query: ROOT_QUERY, variables: { userId: userId }}]}
      >
        {(addFocus, { loading, error }) => (
          <form onSubmit={ e => handleAddFocus(e, addFocus) }>
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
              onClick={ () => { closeFocusForm() }}>
              Cancel
            </button>
          </form>
        )}
      </Mutation>
    </article>
  );
};

export default AddFocusForm;
