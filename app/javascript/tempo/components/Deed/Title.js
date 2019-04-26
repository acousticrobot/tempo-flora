import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'

import UNDO_DEED from '../../mutations/UndoDeed'

const CSS = (loading, error) => {
  if (loading) {
    return 'task-article--title'
  }
  if (error) {
    return 'task-article--title task-article--title_error'
  }
  return 'task-article--title task-article--title-completed'
}

const DeedTitle = ({ id, title, deedsSince }) => (

  <Mutation mutation={ UNDO_DEED }>
    {(undoDeed, { loading, error }) => (
      <div
        className={ CSS(loading, error) }
        onClick={ () => undoDeed({ variables: { deedId: id, deedsSince } }) }
        onKeyPress={ () => undoDeed({ variables: { deedId: id, deedsSince } }) }
        role='button'
        tabIndex='0'
      >
        <div className='task-article--icon task-article--title-icon'>
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
