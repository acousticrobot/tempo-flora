import React from 'react'
import PropTypes from 'prop-types'

const NavBarButton = ({ isActive, buttonText, onClick }) => {
  const className = isActive ? 'filter-navbar--link_active' : 'filter-navbar--link'

  if (!isActive) {
    return <li className={ className }>{buttonText}</li>
  }

  return (
    <li className={ className }>
      <div
        onClick={ e => (onClick(e)) }
        onKeyPress={ e => (onClick(e)) }
        role='button'
        tabIndex='0'
      >
        { buttonText }
      </div>
    </li>
  )
}

NavBarButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default NavBarButton
