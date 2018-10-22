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
    <div className='focus-article--button-icon plus' />
  </div>
)

AddTaskButton.propTypes = {
  openTaskForm: PropTypes.func.isRequired
}

export default AddTaskButton
