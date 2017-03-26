import React, { PropTypes } from 'react';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <li className="filter-navbar--link active">{children}</li>;
  }

  return (
    <li className="filter-navbar--link">
      <a href="#"
         onClick={e => {
           e.preventDefault();
           onClick();
         }}
      >
        {children}
      </a>
    </li>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
