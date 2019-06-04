import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'

import DELETE_TASK from '../../mutations/DeleteTask'

const handleClick = (e, id, deleteTask) => {
  deleteTask({ variables: { taskId: id } })
  e.target.blur()
}


const DeleteTaskButton = ({ id }) => (
  <Mutation mutation={ DELETE_TASK }>
    { deleteTask => (
      <div
        className='task--item'
        onClick={ e => handleClick(e, id, deleteTask) }
        onKeyPress={ e => handleClick(e, id, deleteTask) }
        role='button'
        tabIndex='0'
      >
        <div className='task--icon'>
          <div className='icon icon-delete' />
        </div>
      </div>
    )}
  </Mutation>
)

DeleteTaskButton.propTypes = {
  id: PropTypes.string.isRequired
}

export default DeleteTaskButton
