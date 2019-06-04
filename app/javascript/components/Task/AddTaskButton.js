import React from 'react'
import PropTypes from 'prop-types'

const AddTaskButton = ({ openTaskForm }) => (

  <div
    className='focus--button'
    onClick={ openTaskForm }
    onKeyPress={ openTaskForm }
    role='button'
    tabIndex='0'
  >
    <div className='focus--button-text'>
      Add Task
    </div>
    <div className='task--icon'>
      <div className='icon icon-plus' />
    </div>
  </div>
)

AddTaskButton.propTypes = {
  openTaskForm: PropTypes.func.isRequired
}

export default AddTaskButton
