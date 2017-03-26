import React, { PropTypes } from 'react';

const TaskPoints = ({ points })=> (
  <div className='task-item--points'>
    { points }
  </div>
);

TaskPoints.propTypes = {
  points: PropTypes.number.isRequired,
};

export default TaskPoints;
