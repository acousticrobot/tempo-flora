import React from 'react'
import PropTypes from 'prop-types'
import { Draggable } from 'react-beautiful-dnd'

import TaskTitle from './Title'
import TaskPoints from './Points'
import DeleteTaskButton from './DeleteTaskButton'

import { SHOW_MORE_OPTIONS } from '../../constants/filterTypes'

const Task = ({ task, optionsFilter, deedsSince, completedAt }) => (
  <Draggable draggableId={ task.id } index={ task.position }>
    { provided => (
      <li
        className='focus-item'
        ref={ provided.innerRef }
        { ...provided.draggableProps }
      >
        <article className='task'>
          <TaskTitle
            id={ task.id }
            repeatable={ task.repeatable }
            title={ task.title }
            deedsSince={ deedsSince }
            completedAt={ completedAt }
          />

          <div
            className='task--icon secondary-icon'
            { ...provided.dragHandleProps }
          >
            <div className='icon icon-gripper' />
          </div>

          { optionsFilter === SHOW_MORE_OPTIONS &&
            <TaskPoints points={ task.points } />
          }

          { optionsFilter === SHOW_MORE_OPTIONS &&
            <DeleteTaskButton id={ task.id } />
          }
        </article>
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
