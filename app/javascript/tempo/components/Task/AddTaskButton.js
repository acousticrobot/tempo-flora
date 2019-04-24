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
    <div className='focus-article--button-text'>
      Add Task
    </div>
    <div className='task-article--icon'>
      <div className='icon icon-plus' />
    </div>
  </div>
)

AddTaskButton.propTypes = {
  openTaskForm: PropTypes.func.isRequired
}

export default AddTaskButton
