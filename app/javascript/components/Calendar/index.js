import React from 'react'
import { Query } from 'react-apollo'

import { firstAndLastOfMonth } from '../../lib/Time'
import TARGET_DATE from '../../queries/TargetDate'

import MonthPicker from './MonthPicker'
import WeekdayNames from './WeekdayNames'
import Month from './Month'

const handleChangeDay = (day, client) => {
  client.writeData({ data: { targetDate: day.toDateString() } })
}

const Calendar = () => (
  <Query query={ TARGET_DATE }>
    { ({ data: { targetDate }, client }) => (

      <article className='calendar'>
        <MonthPicker
          currentDay={ targetDate }
          onChangeDay={ day => handleChangeDay(day, client) }
        />
        <WeekdayNames />
        <Month
          targetDates={ firstAndLastOfMonth(targetDate) }
        />
      </article>

    ) }
  </Query>
)

export default Calendar
