import React from 'react'
import PropTypes from 'prop-types'

const AddTaskButton = ({ openTaskForm }) => (

  <div
    className='focus-article--button'
    onClick={ openTaskForm }
    onKeyPress={ openTaskForm }
    role='button'
    tabIndex='0'
  >
    Add Task
    <div className='task-article--icon'>
      <div className='icon icon-plus' />
    </div>
  </div>
)

AddTaskButton.propTypes = {
  openTaskForm: PropTypes.func.isRequired
}

export default AddTaskButton
