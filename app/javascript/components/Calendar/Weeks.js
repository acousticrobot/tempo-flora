import React from 'react'
import PropTypes from 'prop-types'

import Week from './Week'

const weekUID = week => {
  const reducer = (acc, day) => acc + (day.date ? day.date.valueOf().toString().substring(5, 9) : '')
  const id = week.reduce(reducer, '')
  return id
}

const Weeks = ({ foci, weeks, maxPoints }) => (
  <div className='calendar-weeks'>
    {
      weeks.map(week => (
        <Week
          foci={ foci }
          key={ weekUID(week) }
          week={ week }
          maxPoints={ maxPoints }
        />
      ))
    }
  </div>
)

Weeks.propTypes = {
  foci: PropTypes.array.isRequired,
  weeks: PropTypes.array.isRequired,
  maxPoints: PropTypes.number.isRequired
}

export default Weeks
