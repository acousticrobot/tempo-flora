import React, { PropTypes } from 'react';

const Deed = ({ deed }) => (
  <li className='task-item task-item_completed'>
    <div className='task-item--title task-item--title_completed'>
      { deed.title}
    </div>
    <div className='clear'></div>
  </li>
);

Deed.propTypes = {

  deed: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Deed;
