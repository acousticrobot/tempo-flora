import React from 'react'
import PropTypes from 'prop-types'
import { Draggable } from 'react-beautiful-dnd'

import TaskTitle from './Title'
import TaskPoints from './Points'
import TaskPosition from './Position'
import DeleteTaskButton from './DeleteTaskButton'

import { SHOW_MORE_OPTIONS } from '../../constants/filterTypes'

const Task = ({ task, optionsFilter, deedsSince, completedAt }) => (
  <Draggable draggableId={ task.id } index={ task.position }>
    { provided => (
      <li
        className='task-article'
        ref={ provided.innerRef }
        { ...provided.draggableProps }
        { ...provided.dragHandleProps }
      >
        <TaskTitle
          id={ task.id }
          repeatable={ task.repeatable }
          title={ task.title }
          deedsSince={ deedsSince }
          completedAt={ completedAt }
        />

        <TaskPosition />

        { optionsFilter === SHOW_MORE_OPTIONS &&
          <TaskPoints points={ task.points } />
        }

        { optionsFilter === SHOW_MORE_OPTIONS &&
          <DeleteTaskButton id={ task.id } />
        }

      </li>
    )}
  </Draggable>
)

Task.propTypes = {
  optionsFilter: PropTypes.string.isRequired,
  completedAt: PropTypes.string.isRequired,
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    repeatable: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  deedsSince: PropTypes.string.isRequired
}

export default Task
