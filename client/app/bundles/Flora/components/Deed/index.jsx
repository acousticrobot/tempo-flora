import React, { PropTypes } from 'react';
import DeedTitle from './Title';

const Deed = ({ deed, undoDeed }) => (
  <li className='task-article task-article_completed'>
    <DeedTitle
      title={deed.title }
      undoDeed={ undoDeed }
    />
    <div className='clear'></div>
  </li>
);

Deed.propTypes = {
  deed: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  undoDeed: PropTypes.func.isRequired
};

export default Deed;
