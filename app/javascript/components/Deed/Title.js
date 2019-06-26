import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'

import { localEndOfDay } from '../../lib/Time'
import { CSSWithResponse } from '../../lib/CSS'

import UNDO_DEED from '../../mutations/UndoDeed'

const CSS = (loading, error) => (
  CSSWithResponse('task--title', loading, error, '-completed')
)

const handleClick = (e, id, undoDeed, targetDate) => {
  const targetEndDate = localEndOfDay(new Date(targetDate))
  undoDeed({
    variables: {
      deedId: id,
      deedsSince: targetDate,
      deedsTo: targetEndDate
    }
  })
}

const DeedTitle = ({ id, title, deedsSince }) => (

  <Mutation mutation={ UNDO_DEED }>
    {(undoDeed, { loading, error }) => (
      <div
        className={ CSS(loading, error) }
        onClick={ e => handleClick(e, id, undoDeed, deedsSince) }
        onKeyPress={ e => handleClick(e, id, undoDeed, deedsSince) }
        role='button'
        tabIndex='0'
      >
        <div className='task--icon task--title-icon'>
          <div className='icon icon-check-box--checked' />
        </div>
        { title }
      </div>
    )}
  </Mutation>
)

DeedTitle.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deedsSince: PropTypes.string.isRequired
}

export default DeedTitle

// for testing:
export { CSS }
