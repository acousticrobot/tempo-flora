import React, { PropTypes } from 'react';

const TaskTitle = ({ title, completeTask }) => (

  <div className='task-article--title' onClick={ () => completeTask() } >
    { title }
  </div>
);

TaskTitle.propTypes = {
  completeTask: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default TaskTitle;
