import React from 'react'
import PropTypes from 'prop-types'

const TaskTypeIcon = ({repeatable}) => {

  let type = repeatable ? 'repeat' : 'check-box'

  return (
    <div className={ `task-article--title-icon icon-${type}` }></div>
  )
}

TaskTypeIcon.propTypes = {
  repeatable: PropTypes.bool
}

export default TaskTypeIcon
