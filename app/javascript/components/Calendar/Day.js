import React from 'react'
import PropTypes from 'prop-types'

import GraphInterface from '../Graph/GraphInterface'
import GraphKey from '../Graph/Key'

const Day = ({ day, date, foci, maxPoints }) => (
  <article className='graph'>
    { date && date.getDate() }
    <GraphInterface day={ day } foci={ foci } maxPoints={ maxPoints } />
    <GraphKey day={ day } foci={ foci } />
  </article>
)

Day.propTypes = {
  day: PropTypes.shape({
    startOfDay: PropTypes.string.isRequired,
    deeds: PropTypes.array.isRequired
  }).isRequired,
  date: PropTypes.object.isRequired,
  foci: PropTypes.array.isRequired,
  maxPoints: PropTypes.number.isRequired
}

export default Day
