import React from 'react'
import PropTypes from 'prop-types'

const TaskPoints = ({ points }) => (
  <div className='task-article--item'>
    { points }
  </div>
)

TaskPoints.propTypes = {
  points: PropTypes.number.isRequired
}

export default TaskPoints
