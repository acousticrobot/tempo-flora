import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

import { localStartOfDay } from '../../lib/Time'
import TASKBOARD_QUERY from '../../queries/TaskboardQuery'
import Taskboard from './Taskboard'

const TempoContainer = ({ userId }) => {
  const deedsSince = localStartOfDay(new Date())

  return (
    <Query query={ TASKBOARD_QUERY } variables={{ userId, deedsSince }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        return (
          <Taskboard
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

TempoContainer.propTypes = {
  userId: PropTypes.number.isRequired
}

export default TempoContainer
