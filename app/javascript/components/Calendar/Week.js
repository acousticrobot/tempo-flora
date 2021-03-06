import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Day from './Day'

const CSS = day => (classNames('calendar--cell -day', { '-empty': !day.date }))

const Week = ({ foci, week, maxPoints }) => (
  <section className='calendar--row -week'>
    {
      week.map(day => (
        <div
          className={ CSS(day) }
          key={ day.uid }
        >
          { day.day && (
            <Day
              maxPoints={ maxPoints }
              day={ day.day }
              foci={ foci }
              date={ day.date }
            />
          )}
        </div>
      ))
    }
  </section>
)

Week.propTypes = {
  foci: PropTypes.array.isRequired,
  week: PropTypes.array.isRequired,
  maxPoints: PropTypes.number.isRequired
}

export default Week
