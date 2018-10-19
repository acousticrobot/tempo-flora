import React from 'react'
import PropTypes from 'prop-types'

const AddFocusButton = ({ openFocusForm })=> (

  <article
    className="add-focus-button"
    onClick={ () => { openFocusForm() }}
  >
    <h1>
      Add New Focus
    </h1>
    <div className="add-focus-button--icon-wrapper">
      <div className="add-focus-button--icon"/>
    </div>
  </article>
)

AddFocusButton.propTypes = {
  openFocusForm: PropTypes.func.isRequired,
}

export default AddFocusButton
