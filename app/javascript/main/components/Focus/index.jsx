import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

import TASK_FILTER_QUERY from '../../queries/TaskFilter'
import { SHOW_ALL_TASKS, SHOW_ACTIVE_TASKS } from '../../constants/filterTypes'

import SingleFocusButton from './SingleFocusButton'
import PointsAccrued from './PointsAccrued'
import AddTask from '../Task/AddTask'
import Task from '../Task'
import Deed from '../Deed'

const sumAccruedPoints = focus => (
  focus.deeds.reduce((prev, next) => prev + next.points, 0)
)

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

const Deeds = ({ deeds }) => (
  <Query query={ TASK_FILTER_QUERY }>
    { ({ data: { taskFilter } }) => (
      getDeeds(deeds, taskFilter).map(
        deed => <Deed key={ deed.id } deed={ deed } />
      )
    ) }
  </Query>
)

const Focus = ({ focus, optionsFilter }) => (
  <article className='focus-article'>
    <header>
      <h1>
        { focus.title }
        <SingleFocusButton focusId={ focus.id } />
      </h1>
    </header>

    <AddTask focusId={ focus.id } />

    <ul className='focus-items'>
      { focus.tasks.map(task => (
        <Task
          key={ task.id }
          task={ task }
          optionsFilter={ optionsFilter }
        />
      ))}
      <Deeds deeds={ focus.deeds } />
    </ul>

    <PointsAccrued points={ sumAccruedPoints(focus) } />
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
  optionsFilter: PropTypes.string.isRequired
}

export default Focus