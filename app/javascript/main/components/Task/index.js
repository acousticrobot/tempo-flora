import React from 'react'
import PropTypes from 'prop-types'
import TaskTitle from './Title'
import TaskPoints from './Points'
import DeleteTaskButton from './DeleteTaskButton'

import { SHOW_MORE_OPTIONS } from '../../constants/filterTypes'

const Task = ({ task, optionsFilter, deedsSince }) => (
  <li className='task-article'>
    <TaskTitle
      id={ task.id }
      repeatable={ task.repeatable }
      title={ task.title }
      deedsSince={ deedsSince }
    />

    { optionsFilter === SHOW_MORE_OPTIONS &&
      <TaskPoints points={ task.points } />
    }

    { optionsFilter === SHOW_MORE_OPTIONS &&
      <DeleteTaskButton id={ task.id } />
    }

  </li>
)

Task.propTypes = {
  optionsFilter: PropTypes.string.isRequired,
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    repeatable: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  deedsSince: PropTypes.string.isRequired
}

export default Task
