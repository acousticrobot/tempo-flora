export const localStartOfDay = date => {
  date.setHours(0, 0, 0, 0)
  return date.toISOString()
}

export const localEndOfDay = date => {
  date.setHours(23, 59, 59, 999)
  return date.toISOString()
}

export const localTimeOnDate = dateString => {
  const date = new Date(dateString)
  const current = new Date()
  const hours = current.getHours()
  const minutes = current.getMinutes()
  const seconds = current.getSeconds()
  date.setHours(hours, minutes, seconds)
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
