import React, { PropTypes } from 'react';
import TaskTitle from './Title';
import TaskPoints from './Points';
import TaskRepeatable from './Repeatable';
import DeleteTaskButton from './DeleteTaskButton';

import {SHOW_MORE_OPTIONS} from '../../constants/filterTypes';

const Task = ({ task, completeTask, deleteTask, optionsFilter }) => (
  <li className='task-item'>
    <TaskTitle
      title={task.title }
      completeTask={ completeTask }
    />

    { optionsFilter === SHOW_MORE_OPTIONS &&
      <DeleteTaskButton
        deleteTask={ deleteTask }
      />
    }

    <TaskPoints points={ task.points }/>
    { task.repeatable && <TaskRepeatable/> }
    <div className='clear'></div>
  </li>
);

Task.propTypes = {

  completeTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  optionsFilter: PropTypes.string,
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    repeatable: PropTypes.bool,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Task;
