import React, { PropTypes } from 'react';

const NavButton = ({ active, children, onClick }) => {
  if (active) {
    return <li className="filter-navbar--link_active">{children}</li>;
  }

  return (
    <li className="filter-navbar--link"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      <a href="#">
        {children}
      </a>
    </li>
  );
};

NavButton.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default NavButton;
