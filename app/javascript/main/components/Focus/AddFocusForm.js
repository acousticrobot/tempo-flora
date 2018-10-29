import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import ADD_FOCUS from '../../mutations/AddFocus'
import GET_FOCI from '../../queries/GetFoci'

const AddFocusForm = ({ closeFocusForm }) => {
  let titleInput

  const CSS = type => `form--${type} form--${type}_small`

  const handleAddFocus = (e, addFocus) => {
    e.preventDefault()
    addFocus({
      variables: {
        title: titleInput.value
      }
    })
    closeFocusForm()
  }

  return (
    <article className='focus-article form form_small'>
      <Mutation
        mutation={ ADD_FOCUS }
        update={ (cache, { data: { AddFocusMutation: { focus } } }) => {
          const { foci } = cache.readQuery({ query: GET_FOCI })
          cache.writeQuery({
            query: GET_FOCI,
            data: { foci: foci.concat([focus]) }
          })
        } }
      >
        {(addFocus, { loading, error }) => (
          <form onSubmit={ e => handleAddFocus(e, addFocus) }>
            { loading && <p>Loading...</p> }
            { error && <p>Error :( Please try again</p> }

            <label
              className={ CSS('label') }
              htmlFor='title-input'
            >
              Focus Description:
            </label>

            <input
              id='title-input'
              className={ CSS('input') }
              type='text'
              ref={ node => { titleInput = node } }
            />

            <div className='clear' />

            <button type='submit' className={ CSS('button') }>
              Add Focus
            </button>

            <button
              type='submit'
              className={ CSS('button') }
              onClick={ () => { closeFocusForm() } }
            >
              Cancel
            </button>
          </form>
        )}
      </Mutation>
    </article>
  )
}

AddFocusForm.propTypes = {
  closeFocusForm: PropTypes.func.isRequired
}

export default AddFocusForm
