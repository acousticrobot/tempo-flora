import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

import DASHBOARD_QUERY from '../queries/DashboardQuery'
import {
  SHOW_ALL_FOCI, SHOW_SINGLE_FOCUS, SHOW_MORE_OPTIONS, SHOW_STANDARD_OPTIONS
} from '../constants/filterTypes'

import Focus from './Focus'
import AddFocus from './Focus/AddFocus'
import NavBar from './NavBar'

const handleChangeOptions = (optionsState, client) => {
  client.writeData({ data: { optionsFilter: optionsState } })
}

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

const Dashboard = ({ foci, theme, deedsSince }) => (
  <Query query={ DASHBOARD_QUERY }>
    { ({ data: { focusFilter, completedAt, optionsFilter }, client }) => (
      <section className='dashboard'>
        <NavBar
          theme={ theme }
          optionsFilter={ optionsFilter }
          onChangeOptions={ optionsState => handleChangeOptions(optionsState, client) }
        />

        <section className='foci-container'>

          { getVisibleFoci(foci, focusFilter).map(
            focus => (
              <Focus
                key={ focus.id }
                focus={ focus }
                deedsSince={ deedsSince }
                completedAt={ completedAt }
                optionsFilter={
                  focusFilter.filter === SHOW_SINGLE_FOCUS ?
                    SHOW_MORE_OPTIONS : SHOW_STANDARD_OPTIONS
                }
              />
            )
          ) }

          { optionsFilter === SHOW_MORE_OPTIONS &&
            <AddFocus focusFilter={ focusFilter } deedsSince={ deedsSince } />
          }
        </section>
      </section>
    ) }
  </Query>
)

Dashboard.propTypes = {
  foci: PropTypes.array.isRequired,
  deedsSince: PropTypes.string.isRequired,
  theme: PropTypes.string
}

Dashboard.defaultProps = {
  theme: 'DEFAULT'
}

export default Dashboard
