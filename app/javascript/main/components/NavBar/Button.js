import React from 'react';
import PropTypes from 'prop-types';

const NavBarButton = ({ isActive, buttonText, onClick }) => {
  let className = isActive ? "filter-navbar--link_active" : "filter-navbar--link"

  if (!isActive) {
    return <li className={ className }>{buttonText}</li>;
  }

  return (
    <li className={ className } onClick={e => { onClick(e)}} >
      <a href="#">
        { buttonText }
      </a>
    </li>
  );
};

NavBarButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default NavBarButton;
