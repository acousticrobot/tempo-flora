import React from 'react'
import PropTypes from 'prop-types'
import { Draggable } from 'react-beautiful-dnd'

import TaskTitle from './Title'
import TaskPoints from './Points'
import DeleteTaskButton from './DeleteTaskButton'

import { SHOW_MORE_OPTIONS } from '../../constants/filterTypes'

const Task = ({ task, deeds, optionsFilter, targetDate }) => {
  if (deeds.filter(deed => deed.title === task.title).length) {
    return <React.Fragment />
  }

  return (
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
              targetDate={ targetDate }
              optionsFilter={ optionsFilter }
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
}

Task.propTypes = {
  optionsFilter: PropTypes.string.isRequired,
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    repeatable: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  deeds: PropTypes.array.isRequired,
  targetDate: PropTypes.string.isRequired
}

export default Task
