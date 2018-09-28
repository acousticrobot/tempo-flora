import React, { PropTypes } from 'react';
import TaskTypeIcon from './TaskTypeIcon';

const TaskTitle = ({ title, completeTask, repeatable }) => (

  <div className='task-article--title' onClick={ () => completeTask() } >
    <TaskTypeIcon
      repeatable={ repeatable }
    />
    { title }
  </div>
);

TaskTitle.propTypes = {
  completeTask: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  repeatable: PropTypes.bool.isRequired
};

export default TaskTitle;
