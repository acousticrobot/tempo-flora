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
      const type = focusFilter.focusId === focusId ? 'unfocus' : 'focus'
      return (
        <nav className='focus-header--nav-icon'>
          <div
            className='focus--icon'
            onClick={ e => (handleClick(e, focusId, focusFilter, client)) }
            onKeyPress={ e => (handleClick(e, focusId, focusFilter, client)) }
            role='button'
            tabIndex='0'
          >
            <div className={ `icon icon-${type}` } />
          </div>
        </nav>
      )
    }}
  </Query>
)

SingleFocusButton.propTypes = {
  focusId: PropTypes.string.isRequired
}

export default SingleFocusButton
