import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'

import UNDO_DEED from '../../mutations/UndoDeed'
import ROOT_QUERY from  '../../queries/RootQuery'

const DeedTitle = ({ id, title }) => (

  <Mutation mutation={ UNDO_DEED } >
    {(undoDeed, { loading, error }) => (
      <div
        className='task-article--title task-article--title_completed'
        onClick={ e => {
          undoDeed({variables: { deedId: id }})
        }}
      >
        { title }
      </div>
    )}
  </Mutation>
)

DeedTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default DeedTitle
