import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'

import TaskTypeIcon from './TaskTypeIcon'
import COMPLETE_TASK from '../../mutations/CompleteTask'

const CSS = (loading, error) => {
  if (loading) {
    return 'task-article--title task-article--title_completed'
  }
  if (error) {
    return 'task-article--title task-article--title_error'
  }
  return 'task-article--title'
}


const handleClick = (e, id, CompleteTask, deedsSince, completedAt) => {
  CompleteTask(
    { variables: { taskId: id, deedsSince, completedAt } }
  )
  e.target.blur()
}

const TaskTitle = ({ id, title, repeatable, deedsSince, completedAt }) => (

  <Mutation mutation={ COMPLETE_TASK }>
    { (CompleteTask, { loading, error }) => (
      <div
        className={ CSS(loading, error) }
        onClick={ e => handleClick(e, id, CompleteTask, deedsSince, completedAt) }
        onKeyPress={ e => handleClick(e, id, CompleteTask, deedsSince) }
        role='button'
        tabIndex='0'
      >
        <TaskTypeIcon
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
