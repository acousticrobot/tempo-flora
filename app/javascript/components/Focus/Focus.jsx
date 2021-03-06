import React from 'react'
import PropTypes from 'prop-types'
import { Droppable } from 'react-beautiful-dnd';

import SingleFocusButton from './SingleFocusButton'
import FocusFooter from './FocusFooter'
import AddTask from '../Task/AddTask'
import Task from '../Task/Task'
import Deeds from '../Deed/Deeds'

const Focus = ({ focus, optionsFilter, targetDate }) => (
  <article className='taskboard-item focus' data-theme={ focus.color }>
    <header>
      <h1>
        { focus.title }
        <SingleFocusButton focusId={ focus.id } />
      </h1>
    </header>

    <Droppable droppableId={ focus.id }>
      { provided => (
        <ul
          className='focus-items'
          ref={ provided.innerRef }
          { ...provided.droppableProps }
        >
          { focus.tasks.map(task => (
            <Task
              key={ task.id }
              task={ task }
              deeds={ focus.deeds }
              targetDate={ targetDate }
              optionsFilter={ optionsFilter }
            />
          ))}
          { provided.placeholder }
          <Deeds deeds={ focus.deeds } deedsSince={ targetDate } />
        </ul>
      )}
      </Droppable>

    <FocusFooter focusId={ focus.id } />
  </article>
)

Focus.propTypes = {
  focus: PropTypes.shape({
    id: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
    deeds: PropTypes.array.isRequired
  }).isRequired,
  targetDate: PropTypes.string.isRequired,
  optionsFilter: PropTypes.string.isRequired
}

export default Focus
