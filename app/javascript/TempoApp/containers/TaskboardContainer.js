import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

import TASKBOARD_QUERY from '../../queries/TaskboardQuery'
import Taskboard from './Taskboard'

const handleChangeOptions = (optionsState, client) => {
  client.writeData({ data: { optionsFilter: optionsState } })
}

const TaskboardContainer = ({ userId }) => (
  <Query query={ TASKBOARD_QUERY } variables={{ userId }}>
    {({ loading, error, data, client }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return (
        <Taskboard
          foci={ data.foci }
          theme={ data.user.theme }
          optionsFilter={ data.optionsFilter }
          onChangeOptions={ optionsState => handleChangeOptions(optionsState, client) }
          focusFilter={ data.focusFilter }
          targetDate={ data.targetDate }
        />
      )
    }}
  </Query>
)

TaskboardContainer.propTypes = {
  userId: PropTypes.number.isRequired
}

export default TaskboardContainer
