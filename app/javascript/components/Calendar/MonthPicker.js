import React from 'react'
import PropTypes from 'prop-types'

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const getMonth = day => {
  const date = new Date(day)
  return monthNames[date.getMonth()]
}

const next = day => {
  const date = new Date(day)
  const currentYear = date.getFullYear()
  const currentMonth = date.getMonth()
  const year = (currentMonth === 11) ? currentYear + 1 : currentYear
  const month = (currentMonth + 1) % 12
  return (new Date(year, month))
}

const previous = day => {
  const date = new Date(day)
  const currentYear = date.getFullYear()
  const currentMonth = date.getMonth()
  const year = (currentMonth === 0) ? currentYear - 1 : currentYear
  const month = (currentMonth === 0) ? 11 : currentMonth - 1
  return (new Date(year, month))
}

const MonthPicker = ({ currentDay, onChangeDay }) => (
  <section className='calendar--row -month'>
    <div
      onClick={ () => onChangeDay((previous(currentDay))) }
      onKeyPress={ () => onChangeDay((previous(currentDay))) }
      role='button'
      tabIndex='0'
    >
      { '<<<= Previous'}
    </div>
    <div className='calendar--cell -month'>
      { getMonth(currentDay) }
    </div>
    <div
      onClick={ () => onChangeDay((next(currentDay))) }
      onKeyPress={ () => onChangeDay((next(currentDay))) }
      role='button'
      tabIndex='0'
    >
      { 'Next =>>>'}
    </div>
  </section>
)

MonthPicker.propTypes = {
  currentDay: PropTypes.string.isRequired,
  onChangeDay: PropTypes.func.isRequired
}

export default MonthPicker
