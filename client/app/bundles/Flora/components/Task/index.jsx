import React, { PropTypes } from 'react';
import TaskTitle from './Title';
import TaskPoints from './Points';

const CSSMod = (task)=> (task.completed ? 'completed' : 'imcomplete');
const CSS = (task)=> ('task-item task-item_' + CSSMod(task));

const Task = ({ completeTask, task }) => (
  <li className={ CSS(task) }>
    <TaskTitle
      title={task.title }
      completed={ task.completed }
      completeTask={ completeTask }
    />

    { !task.completed && <TaskPoints points={ task.points }/> }
    <div className='clear'></div>
  </li>
);

Task.propTypes = {

  completeTask: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Task;
