import React from 'react'
import PropTypes from 'prop-types'

const TaskTypeIcon = ({ repeatable, onClick }) => {
  const type = repeatable ? 'repeat' : 'check-box'

  return (
    <div
      className='task--icon task--title-icon'
      onClick={ e => (onClick(e)) }
      onKeyPress={ e => (onClick(e)) }
      role='button'
      tabIndex='0'
    >
      <div className={ `icon icon-${type}` } />
    </div>
  )
}

TaskTypeIcon.propTypes = {
  repeatable: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default TaskTypeIcon
