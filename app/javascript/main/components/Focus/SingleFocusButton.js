import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

import FOCUS_FILTER_QUERY from '../../queries/FocusFilter'
import { SHOW_ALL_FOCI, SHOW_SINGLE_FOCUS } from '../../constants/filterTypes'

const handleClick = (e, focusId, focusFilter, client) => {
  e.preventDefault()
  if (focusFilter.focusId == null) {
    client.writeData({
      data: {
        focusFilter: {
          __typename: 'focusFilter',
          filter: SHOW_SINGLE_FOCUS,
          focusId
        }
      }
    })
  } else {
    client.writeData({
      data: {
        focusFilter: {
          __typename: 'focusFilter',
          filter: SHOW_ALL_FOCI,
          focusId: null
        }
      }
    })
  }
}

const SingleFocusButton = ({ focusId }) => (
  <Query query={ FOCUS_FILTER_QUERY }>
    {({ data: { focusFilter }, client }) => {
      const iconType = focusFilter.focusId === focusId ? 'less' : 'more'
      return (
        <nav className='nav-icon'>
          <div
            className={ `nav-icon--link nav-icon--link_${iconType}` }
            onClick={ e => (handleClick(e, focusId, focusFilter, client)) }
            onKeyPress={ e => (handleClick(e, focusId, focusFilter, client)) }
            role='button'
            tabIndex='0'
          />
        </nav>
      )
    }}
  </Query>
)

SingleFocusButton.propTypes = {
  focusId: PropTypes.string.isRequired
}

export default SingleFocusButton