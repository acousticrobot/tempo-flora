import React, { PropTypes } from 'react';

const MoreButton = ({ active, onClickActive, onClickInactive }) => {
  if (active) {
    return (
      <nav className="nav-icon">
        <a className="nav-icon--link nav-icon--link_less"
           href="#"
           onClick={e => {
             e.preventDefault();
             onClickInactive();
           }}
        ></a>
      </nav>
    )
  }

  return (
    <nav className="nav-icon">
      <a className="nav-icon--link nav-icon--link_more"
         href="#"
         onClick={e => {
           e.preventDefault();
           onClickActive();
         }}
      ></a>
    </nav>
  );
};

MoreButton.propTypes = {
  active: PropTypes.bool.isRequired,
  onClickActive: PropTypes.func.isRequired,
  onClickInactive: PropTypes.func.isRequired
};

export default MoreButton;
