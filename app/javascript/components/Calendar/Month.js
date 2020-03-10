import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

import { localStartOfDay } from '../../lib/Time'
import DAYS_DEEDS from '../../queries/DaysDeeds'

import Weeks from './Weeks'

const maxPoints = days => days.map(day => day.totalPoints).reduce((a, b) => (a > b ? a : b), 0)

const dayUID = (w, dow) => `${w}-${dow}`

const assembleWeeksFromDays = (targetDates, days) => {
  const { startDate, endDate } = targetDates
  const firstDayOfWeek = startDate.getDay() // (0-6)

  const weeks = []
  for (let w = 0; w < 6; w++) {
    const date = startDate
    const week = []

    for (let dow = 0; dow < 7; dow++) {
      if (w === 0 && dow < firstDayOfWeek) {
        // pad the beginning of the calendar with blank days
        week.push({ date: null, uid: dayUID(w, dow) })
      } else if ((date > endDate) && (dow === 6)) {
        // add the last week last blank day and quit
        week.push({ date: null, uid: dayUID(w, dow) })
        break
      } else if (date > endDate) {
        // pad the end of the calendar with blank days
        week.push({ date: null, uid: dayUID(w, dow) })
      } else {
        const day = days.find(
          d => date.getDate() === (new Date(d.startOfDay)).getDate()
        )
        week.push({ day, date: new Date(date), uid: dayUID(w, dow) })
        date.setDate(date.getDate() + 1)
      }
    }
    weeks.push(week)
  }
  return weeks
}


const Month = ({ targetDates }) => {
  const since = localStartOfDay(targetDates.startDate)
  const to = localStartOfDay(targetDates.endDate)

  return (
    <Query query={ DAYS_DEEDS } variables={{ since, to }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading Month Data...</p>
        if (error) return <p>Error Month Data :(</p>
        return (
          <Weeks
            foci={ data.foci }
            weeks={ assembleWeeksFromDays(targetDates, data.days) }
            maxPoints={ maxPoints(data.days) }
          />
        )
      }}
    </Query>
  )
}

Month.propTypes = {
  targetDates: PropTypes.object.isRequired
}

export default Month
