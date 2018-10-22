import React from 'react'
import { Query } from 'react-apollo'

import FOCUS_FILTER_QUERY from '../../queries/FocusFilter'
import { SHOW_ALL_FOCI, SHOW_SINGLE_FOCUS } from '../../constants/filterTypes'

import NavBarButton from './Button'

const handleClick = (e, focusFilter, client) => {
  e.preventDefault()
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

const FocusFilterButton = () => (
  <Query query={ FOCUS_FILTER_QUERY }>
    { ({ data: { focusFilter }, client }) => (
      <NavBarButton
        isActive={ focusFilter.filter === SHOW_SINGLE_FOCUS }
        onClick={ e => handleClick(e, focusFilter, client) }
        buttonText='Show All Foci'
      />
    ) }
  </Query>
)

export default FocusFilterButton
