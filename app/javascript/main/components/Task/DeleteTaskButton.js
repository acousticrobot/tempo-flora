import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from "react-apollo"

import DELETE_TASK from "../../mutations/DeleteTask"

const DeleteTaskButton = ({ id })=> (
  <Mutation mutation={ DELETE_TASK } >
    {(deleteTask, { loading, error }) => (
      <div
        className="task-article--item task-article--item_full"
        onClick={ e => {
          deleteTask({variables: { taskId: id }})
        }}
      >
        Delete Task
        <div className="task-article--icon icon-minus"></div>
      </div>
    )}
  </Mutation>
)

DeleteTaskButton.propTypes = {
  id: PropTypes.string.isRequired,
}

export default DeleteTaskButton



