import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

import ROOT_QUERY from '../queries/RootQuery'
import Dashboard from '../components/Dashboard'

const FloraContainer = ({ userId }) => (
  <Query query={ ROOT_QUERY } variables={{ userId }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return (
        <Dashboard
          foci={ data.user.foci }
          userId={ userId }
        />
      )
    }}
  </Query>
)

FloraContainer.propTypes = {
  userId: PropTypes.number.isRequired
}

export default FloraContainer
