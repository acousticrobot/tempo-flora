export const localStartOfDay = date => {
  date.setHours(0, 0, 0, 0)
  return date.toISOString()
}

export const firstAndLastOfMonth = targetDate => {
  const month = new Date(targetDate).getMonth() // [0 - 11]
  const year = new Date(targetDate).getFullYear() // [ex 2021]
  const start = localStartOfDay(new Date(year, month))
  const startDate = new Date(start)
  const endDate = new Date(start)

  const daysInMonth = (32 - ((new Date(year, month, 32).getDate())))
  endDate.setDate(daysInMonth)

  return {
    startDate,
    endDate
  }
}
