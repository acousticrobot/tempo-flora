import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'

import { localStartOfDay } from '../../lib/Time'
import TaskTypeIcon from './TaskTypeIcon'
import COMPLETE_TASK from '../../mutations/CompleteTask'

const CSS = (loading, error) => {
  if (loading) {
    return 'task--title -loading'
  }
  if (error) {
    return 'task--title -error'
  }
  return 'task--title'
}


const handleClick = (e, id, CompleteTask, deedsSince, completedAt) => {
  const date = completedAt ? new Date(completedAt) : new Date()
  const start = localStartOfDay(date)
  CompleteTask(
    { variables: { taskId: id, deedsSince, completedAt, localStartOfDay: start } }
  )
  e.target.blur()
}

const TaskTitle = ({ id, title, repeatable, deedsSince, completedAt }) => (

  <Mutation mutation={ COMPLETE_TASK }>
    { (CompleteTask, { loading, error }) => (
      <div
        className={ CSS(loading, error) }
        onKeyPress={ e => handleClick(e, id, CompleteTask, deedsSince) }
        role='button'
        tabIndex='0'
      >
        <TaskTypeIcon
          onClick={ e => handleClick(e, id, CompleteTask, deedsSince, completedAt) }
          repeatable={ repeatable }
        />
        { title }
      </div>
    )}
  </Mutation>
)

TaskTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  repeatable: PropTypes.bool.isRequired,
  deedsSince: PropTypes.string.isRequired,
  completedAt: PropTypes.string.isRequired
}

export default TaskTitle
