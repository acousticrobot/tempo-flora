import React, { PropTypes } from 'react';

const PointsAccrued = ({ points })=> (
  <div className='focus-item--points'>
    { points }
  </div>
);

PointsAccrued.propTypes = {
  points: PropTypes.number.isRequired,
};

export default PointsAccrued;
