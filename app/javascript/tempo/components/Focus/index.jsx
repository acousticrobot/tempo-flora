import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

import TASK_FILTER_QUERY from '../../queries/TaskFilter'
import { SHOW_ALL_TASKS, SHOW_ACTIVE_TASKS } from '../../constants/filterTypes'

import SingleFocusButton from './SingleFocusButton'
import FocusFooter from './FocusFooter'
import AddTask from '../Task/AddTask'
import Task from '../Task'
import Deed from '../Deed'

const getDeeds = (deeds, taskFilter) => {
  switch (taskFilter) {
    case SHOW_ALL_TASKS:
      return deeds
    case SHOW_ACTIVE_TASKS:
      return []
    default:
      return []
  }
}

const Deeds = ({ deeds, deedsSince }) => (
  <Query query={ TASK_FILTER_QUERY }>
    { ({ data: { taskFilter } }) => (
      getDeeds(deeds, taskFilter).map( deed =>
        <Deed key={ deed.id } deed={ deed } deedsSince={ deedsSince} />
      )
    ) }
  </Query>
)

const Focus = ({ focus, optionsFilter, deedsSince, completedAt }) => (
  <article className='focus-article' data-theme={ focus.color }>
    <header>
      <h1>
        { focus.title }
        <SingleFocusButton focusId={ focus.id } />
      </h1>
    </header>

    <ul className='focus-items'>
      { focus.tasks.map(task => (
        <Task
          key={ task.id }
          task={ task }
          deedsSince={ deedsSince }
          optionsFilter={ optionsFilter }
          completedAt={ completedAt }
        />
      ))}
      <Deeds deeds={ focus.deeds } deedsSince={ deedsSince } />
    </ul>

    <FocusFooter focusId={ focus.id } />
  </article>
)

Deeds.propTypes = {
  deeds: PropTypes.array.isRequired
}

Focus.propTypes = {
  focus: PropTypes.shape({
    id: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
    deeds: PropTypes.array.isRequired
  }).isRequired,
  deedsSince: PropTypes.string.isRequired,
  optionsFilter: PropTypes.string.isRequired,
  completedAt: PropTypes.string.isRequired
}

export default Focus
