import React from 'react'
import PropTypes from 'prop-types'

const TaskTypeIcon = ({ repeatable }) => {
  const type = repeatable ? 'repeat' : 'check-box'

  return (
    <div className={ `task-article--title-icon icon-${type}` } />
  )
}

TaskTypeIcon.propTypes = {
  repeatable: PropTypes.bool.isRequired
}

export default TaskTypeIcon
