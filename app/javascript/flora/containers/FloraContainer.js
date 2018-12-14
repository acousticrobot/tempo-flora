import React from 'react'
import { Query } from 'react-apollo'

import ROOT_QUERY from '../queries/RootQuery'
import Dashboard from '../components/Dashboard'

const localWeekAgo = () => {
  const date = new Date()
  date.setHours(0, 0, 0, 0)
  date.setDate(date.getDate() - 6)
  return date.toISOString()
}

const FloraContainer = () => {
  const since = localWeekAgo()

  return (
    <Query query={ ROOT_QUERY } variables={{ since }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        return (
          <Dashboard foci={ data.foci } days={ data.days } />
        )
      }}
    </Query>
  )
}

export default FloraContainer
