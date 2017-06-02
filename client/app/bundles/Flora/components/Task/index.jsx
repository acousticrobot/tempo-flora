import React, { PropTypes } from 'react';
import TaskTitle from './Title';
import TaskPoints from './Points';
import TaskRepeatable from './Repeatable';
import DeleteTaskButton from './DeleteTaskButton';

import {SHOW_MORE_OPTIONS} from '../../constants/filterTypes';

const Task = ({ task, completeTask, deleteTask, optionsFilter }) => (
  <li className='task-article'>
    <TaskTitle
      title={task.title }
      completeTask={ completeTask }
    />

    <TaskPoints points={ task.points }/>
    { task.repeatable && <TaskRepeatable/> }

    { optionsFilter === SHOW_MORE_OPTIONS &&
      <DeleteTaskButton
        deleteTask={ deleteTask }
      />
    }

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
