import React from 'react'
import PropTypes from 'prop-types'

import Day from './Day'

const limits = days => {
  const maxPoints = days.map(day => day.totalPoints).reduce((a, b) => (a > b ? a : b), 0)
  return {
    maxPoints
  }
}

const Dashboard = ({ days, foci }) => (
  <div className='flora-week'>
    {
      days.map(day => (
        <Day limits={ limits(days) } key={ day.startOfDay } day={ day } foci={ foci } />
      ))
    }
  </div>
)

Dashboard.propTypes = {
  days: PropTypes.array.isRequired,
  foci: PropTypes.array.isRequired
}

export default Dashboard
