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
  return 'task-article--title task-article--title_completed'
}

const DeedTitle = ({ id, title }) => (

  <Mutation mutation={ UNDO_DEED }>
    {(undoDeed, { loading, error }) => (
      <div
        className={ CSS(loading, error) }
        onClick={ () => undoDeed({ variables: { deedId: id } }) }
        onKeyPress={ () => undoDeed({ variables: { deedId: id } }) }
        role='button'
        tabIndex='0'
      >
        { title }
      </div>
    )}
  </Mutation>
)

DeedTitle.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default DeedTitle
