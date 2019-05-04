import React from 'react'
import { Query } from 'react-apollo'

import TARGET_DATE from '../../queries/TargetDate'

import MonthPicker from './MonthPicker'
import WeekdayNames from './WeekdayNames'
import Month from './Month'

const handleChangeDay = (day, client) => {
  client.writeData({ data: { targetDate: day.toDateString() } })
}

const monthTargetDates = targetDate => {
  const month = new Date(targetDate).getMonth() // [0 - 11]
  const year = new Date(targetDate).getFullYear() // [ex 2021]
  const startDate = new Date(year, month)
  const endDate = new Date(year, month)

  const daysInMonth = (32 - ((new Date(year, month, 32).getDate())))
  endDate.setDate(daysInMonth)

  return {
    startDate,
    endDate
  }
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
          targetDates={ monthTargetDates(targetDate) }
        />
      </article>

    ) }
  </Query>
)

export default Calendar
