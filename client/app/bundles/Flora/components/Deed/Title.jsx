import React, { PropTypes } from 'react';

const DeedTitle = ({ title, undoDeed }) => (

  <div className='task-item--title' onClick={ () => undoDeed() } >
    { title }
  </div>
);

DeedTitle.propTypes = {
  undoDeed: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default DeedTitle;
