import React from 'react'
import PropTypes from 'prop-types'

const TaskTypeIcon = ({ repeatable }) => {
  const type = repeatable ? 'repeat' : 'check-box'

  return (
    <div
      className='task--icon task--title-icon'
    >
      <div className={ `icon icon-${type}` } />
    </div>
  )
}

TaskTypeIcon.propTypes = {
  repeatable: PropTypes.bool.isRequired
}

export default TaskTypeIcon
