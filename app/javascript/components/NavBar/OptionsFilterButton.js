import React from 'react'
import PropTypes from 'prop-types'

const OptionsFilterButton = ({ icon, onClick }) => (
  <div className='options-nav--icon-wrapper'>
    <div
      className='options-nav--icon'
      onClick={ () => (onClick()) }
      onKeyPress={ () => (onClick()) }
      role='button'
      tabIndex='0'
    >
      <div className={ `icon icon-${icon}` } />
    </div>
  </div>
)


OptionsFilterButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default OptionsFilterButton
