import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'

import { localTimeOnDate, localEndOfDay } from '../../lib/Time'
import { CSSWithResponse } from '../../lib/CSS'

import TaskTypeIcon from './TaskTypeIcon'
import COMPLETE_TASK from '../../mutations/CompleteTask'
import { SHOW_MORE_OPTIONS, SHOW_STANDARD_OPTIONS } from '../../constants/filterTypes'

const CSS = (loading, error) => (
  CSSWithResponse('task--title', loading, error)
)

const handleClick = (e, id, completeTask, targetDate) => {
  const completedAt = localTimeOnDate(targetDate)
  const targetEndDate = localEndOfDay(new Date(targetDate))
  completeTask({
    variables: {
      taskId: id,
      deedsSince: targetDate,
      deedsTo: targetEndDate,
      completedAt,
      localStartOfDay: targetDate
    }
  })
  e.target.blur()
}

const TaskTitle = ({ id, title, repeatable, targetDate, optionsFilter }) => (

  <Mutation mutation={ COMPLETE_TASK }>
    { (completeTask, { loading, error }) => (
      <div className={ CSS(loading, error) }>
        <span

          onKeyPress={ e => handleClick(e, id, completeTask, targetDate) }
          onClick={ e => handleClick(e, id, completeTask, targetDate) }
          role='button'
          tabIndex='0'
        >
          <TaskTypeIcon repeatable={ repeatable } />
          { optionsFilter === SHOW_STANDARD_OPTIONS && <div>{ title }</div> }
        </span>
        { optionsFilter === SHOW_MORE_OPTIONS && <div>{ title }</div> }
      </div>
    )}
  </Mutation>
)

TaskTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  repeatable: PropTypes.bool.isRequired,
  targetDate: PropTypes.string.isRequired,
  optionsFilter: PropTypes.string.isRequired
}

export default TaskTitle

export { CSS }
