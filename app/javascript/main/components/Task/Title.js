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


const handleClick = (e, id, CompleteTask) => {
  CompleteTask({ variables: { taskId: id } })
  e.target.blur()
}

const TaskTitle = ({ id, title, repeatable }) => (

  <Mutation mutation={ COMPLETE_TASK }>
    { (CompleteTask, { loading, error }) => (
      <div
        className={ CSS(loading, error) }
        onClick={ e => handleClick(e, id, CompleteTask) }
        onKeyPress={ e => handleClick(e, id, CompleteTask) }
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
  repeatable: PropTypes.bool.isRequired
}

export default TaskTitle
