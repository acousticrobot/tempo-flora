import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

import ROOT_QUERY from '../queries/RootQuery'
import Dashboard from '../components/Dashboard'

const localStartOfDay = () => {
  const date = new Date()
  date.setHours(0, 0, 0, 0)
  return date.toISOString()
}

const FloraContainer = ({ userId }) => {
  const deedsSince = localStartOfDay()

  return (
    <Query query={ ROOT_QUERY } variables={{ userId, deedsSince }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        return (
          <Dashboard
            foci={ data.foci }
            deedsSince={ deedsSince }
            theme={ data.user.theme }
            optionsFilter={ data.optionsFilter }
          />
        )
      }}
    </Query>
  )
}

FloraContainer.propTypes = {
  userId: PropTypes.number.isRequired
}

export default FloraContainer
