import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

import FOCUS_FILTER_QUERY from '../queries/FocusFilter'
import { SHOW_ALL_FOCI, SHOW_SINGLE_FOCUS, SHOW_MORE_OPTIONS, SHOW_STANDARD_OPTIONS } from '../constants/filterTypes'

import Focus from './Focus'
import AddFocus from './Focus/AddFocus'
import NavBar from './NavBar'

const getVisibleFoci = (foci, focusFilter) => {
  switch (focusFilter.filter) {
    case SHOW_ALL_FOCI:
      return foci
    case SHOW_SINGLE_FOCUS:
      return foci.filter(f => f.id === focusFilter.focusId)
    default:
      return foci
  }
}

const Dashboard = ({ foci, userId }) => (
  <Query query={ FOCUS_FILTER_QUERY }>
    { ({ data: { focusFilter } }) => (
      <section className='dashboard'>
        <NavBar />

        <section className='foci-container'>
          { getVisibleFoci(foci, focusFilter).map(
            focus => (
              <Focus
                key={ focus.id }
                focus={ focus }
                optionsFilter={
                  focusFilter.filter === SHOW_SINGLE_FOCUS ? SHOW_MORE_OPTIONS : SHOW_STANDARD_OPTIONS
                }
              />
            )
          ) }
          <AddFocus userId={ userId } focusFilter={ focusFilter } />
        </section>
      </section>
    ) }
  </Query>
)

Dashboard.propTypes = {
  foci: PropTypes.array.isRequired,
  userId: PropTypes.number.isRequired
}

export default Dashboard
