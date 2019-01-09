import React from 'react'
import PropTypes from 'prop-types'

const AddFocusButton = ({ openFocusForm }) => (

  <div
    className='add-focus-button'
    onClick={ openFocusForm }
    onKeyPress={ openFocusForm }
    role='button'
    tabIndex='0'
  >
    <header>
      <h1>
        <nav className='focus-header--nav-icon'>
          <div className='focus-article--icon'>
            <div className='icon icon-plus' />
          </div>
        </nav>
      </h1>
    </header>
  </div>
)

AddFocusButton.propTypes = {
  openFocusForm: PropTypes.func.isRequired
}

export default AddFocusButton
