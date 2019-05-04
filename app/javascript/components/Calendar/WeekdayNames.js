import React from 'react'

const daysNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const WeekdayNames = () => (
  <section className='calendar--row -weekday'>
    {
      daysNames.map(dayName => (
        <div
          className='calendar--cell -weekday'
          key={ dayName }
        >
          { dayName }
        </div>
      ))
    }
  </section>
)

export default WeekdayNames
