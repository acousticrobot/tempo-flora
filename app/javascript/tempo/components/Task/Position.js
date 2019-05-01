import React from 'react'
import PropTypes from 'prop-types'

const TaskPosition = ({ position }) => (
  <div className='task-article--item'>
    { `-${position}-` }
  </div>
)

TaskPosition.propTypes = {
  position: PropTypes.number.isRequired
}

export default TaskPosition
