import React, { PropTypes } from 'react';
import TaskTitle from './Title';
import TaskPoints from './Points';
import TaskRepeatable from './Repeatable';

const Task = ({ task, completeTask }) => (
  <li className='task-item'>
    <TaskTitle
      title={task.title }
      completeTask={ completeTask }
    />

    { !task.completed && <TaskPoints points={ task.points }/> }
    { task.repeatable && <TaskRepeatable/> }
    <div className='clear'></div>
  </li>
);

Task.propTypes = {

  completeTask: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    repeatable: PropTypes.bool,
    completed: PropTypes.bool,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Task;
