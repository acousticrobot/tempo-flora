import React from 'react'
import PropTypes from 'prop-types'
import TaskTypeIcon from './TaskTypeIcon'
import { Mutation } from "react-apollo"

import COMPLETE_TASK from '../../mutations/CompleteTask'

const TaskTitle = ({ id, title, repeatable }) => (

  <Mutation mutation={ COMPLETE_TASK } >
    {(CompleteTakkie, { loading, error }) => (
      <div
        className='task-article--title'
        onClick={ e => {
          CompleteTakkie({variables: { taskId: id }})
        }}
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
