import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

import TASKBOARD_QUERY from '../queries/TaskboardQuery'

import FociContainer from './Focus/Foci'
import NavBar from './NavBar'

const handleChangeOptions = (optionsState, client) => {
  client.writeData({ data: { optionsFilter: optionsState } })
}

const Taskboard = ({ foci, theme, deedsSince }) => (
  <Query query={ TASKBOARD_QUERY }>
    { ({ data: { focusFilter, completedAt, optionsFilter }, client }) => (
      <article className='taskboard'>
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
