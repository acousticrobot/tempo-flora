import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import ADD_FOCUS from '../../mutations/AddFocus'
import GET_FOCI from '../../queries/GetFoci'

const AddFocusForm = ({ closeFocusForm, deedsSince }) => {
  let titleInput

  const CSS = type => `add-focus--form-${type}`

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
    <article className='focus-article add-focus--form'>
      <Mutation
        mutation={ ADD_FOCUS }
        update={ (cache, { data: { AddFocusMutation: { focus } } }) => {
          const { foci } = cache.readQuery({ query: GET_FOCI, variables: { deedsSince } })
          cache.writeQuery({
            query: GET_FOCI,
            variables: { deedsSince },
            data: { foci: foci.concat([focus]) }
          })
        } }
      >
        {(addFocus, { loading, error }) => (
          <form onSubmit={ e => handleAddFocus(e, addFocus) }>
            { loading && <p>Loading...</p> }
            { error && <p>Error :( Please try again</p> }

            <header>
              <h1>
                <label
                  className={ CSS('label add-focus-form-header') }
                  htmlFor='title-input'
                >
                  Title:
                </label>

                <input
                  id='title-input'
                  className={ CSS('title-input') }
                  type='text'
                  ref={ node => { titleInput = node } }
                />

                <button type='submit'>
                  <nav className='focus-header--nav-icon'>
                    <div className='focus-article--icon'>
                      <div className='icon icon-plus' />
                    </div>
                  </nav>
                </button>
              </h1>
            </header>

            <button
              type='submit'
              className='form--button form--button_small'
              onClick={ () => { closeFocusForm() } }
            >
              Cancel
              <div className='task-article--icon'>
                <div className='icon icon-minus' />
              </div>
            </button>
          </form>
        )}
      </Mutation>
    </article>
  )
}

AddFocusForm.propTypes = {
  closeFocusForm: PropTypes.func.isRequired,
  deedsSince: PropTypes.string.isRequired
}

export default AddFocusForm
