import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

import TASKBOARD_CLIENT_QUERY from '../../queries/TaskboardClientQuery'

import Foci from '../../components/Focus/Foci'
import NavBar from '../../components/NavBar'

const handleChangeOptions = (optionsState, client) => {
  client.writeData({ data: { optionsFilter: optionsState } })
}

const Taskboard = ({ foci, theme, deedsSince }) => (
  <Query query={ TASKBOARD_CLIENT_QUERY }>
    { ({ data: { focusFilter, completedAt, optionsFilter }, client }) => (
      <article className='taskboard'>
        <NavBar
          theme={ theme }
          optionsFilter={ optionsFilter }
          onChangeOptions={ optionsState => handleChangeOptions(optionsState, client) }
        />

        <Foci
          foci={ foci }
          deedsSince={ deedsSince }
          focusFilter={ focusFilter }
          optionsFilter={ optionsFilter }
          completedAt={ completedAt }
        />
      </article>
    ) }
  </Query>
)

Taskboard.propTypes = {
  foci: PropTypes.array.isRequired,
  deedsSince: PropTypes.string.isRequired,
  theme: PropTypes.string
}

Taskboard.defaultProps = {
  theme: 'DEFAULT'
}

export default Taskboard
