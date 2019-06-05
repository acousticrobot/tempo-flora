import React from 'react'
import PropTypes from 'prop-types'

import { Query } from 'react-apollo'
import TASK_FILTER_QUERY from '../../queries/TaskFilter'
import { SHOW_ALL_TASKS, SHOW_ACTIVE_TASKS } from '../../constants/filterTypes'

import Deed from './Deed'

const getDeeds = (deeds, taskFilter) => {
  switch (taskFilter) {
    case SHOW_ALL_TASKS:
      return deeds
    case SHOW_ACTIVE_TASKS:
      return []
    default:
      return []
  }
}

const Deeds = ({ deeds, deedsSince }) => (
  <Query query={ TASK_FILTER_QUERY }>
    { ({ data: { taskFilter } }) => (
      getDeeds(deeds, taskFilter).map(
        deed => <Deed key={ deed.id } deed={ deed } deedsSince={ deedsSince } />
      )
    ) }
  </Query>
)

Deeds.propTypes = {
  deeds: PropTypes.array.isRequired,
  deedsSince: PropTypes.string.isRequired
}

export default Deeds
