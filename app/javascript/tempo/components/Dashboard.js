import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

import DASHBOARD_QUERY from '../queries/DashboardQuery'
import FociContainer from './Focus/Foci'
import NavBar from './NavBar'

const handleChangeOptions = (optionsState, client) => {
  client.writeData({ data: { optionsFilter: optionsState } })
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

        <FociContainer
          foci={ foci }
          deedsSince={ deedsSince }
          focusFilter={ focusFilter }
          optionsFilter={ optionsFilter }
          completedAt={ completedAt }
        />
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
