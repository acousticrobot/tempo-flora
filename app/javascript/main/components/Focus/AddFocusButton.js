import React from 'react'
import PropTypes from 'prop-types'

const AddFocusButton = ({ openFocusForm }) => (

  <article className='add-focus-article'>
    <div
      className='add-focus-button'
      onClick={ openFocusForm }
      onKeyPress={ openFocusForm }
      role='button'
      tabIndex='0'
    >
      <header>
        <h1>
          Add New Focus
        </h1>
      </header>
      <div className='add-focus-button--icon-wrapper'>
        <div className='add-focus-button--icon' />
      </div>
    </div>
  </article>
)

AddFocusButton.propTypes = {
  openFocusForm: PropTypes.func.isRequired
}

export default AddFocusButton
