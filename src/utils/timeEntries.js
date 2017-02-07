const isSameDate = (d1, d2) => {
  if (
    (d1.getFullYear() === d2.getFullYear())
    &&
    (d1.getMonth() === d2.getMonth())
    &&
    (d1.getDate() === d2.getDate())
  ) {
      return true
  }

  return false
}
const getDate = (date) => {
  date = new Date(date)

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const weekday = weekdays[date.getDay()]
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const month = months[date.getMonth()]
  const today = new Date()
  let yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)


  if (isSameDate(date, today)) {
    return 'Today'
  } else if (isSameDate(date, yesterday)) {
    return 'Yesterday'
  } else {
    return weekday + ', ' + date.getDate() + ' ' + month
  }
}

export const groupByDay = (timeEntries) => {
  //convert object to array
  const arr = Object.keys(timeEntries).map((key) => {
    const entry = Object.assign({}, timeEntries[key], {key})
    return entry
  })

  //sort by start date
  arr.sort(function(a, b){
    return new Date(b.startTime) - new Date(a.startTime)
  })

  let result = []
  arr.forEach((entry) => {
    const entryDate = getDate(entry.startTime)
    let found = false
    for (let i = 0, len = result.length; i < len; i++) {      
      if (result[i].date ===  entryDate) {
        result[i].entries.push(entry)
        found = true
        return
      }
    }
    if (!found) {
      result.push({
        date: entryDate,
        entries:[entry]
      })
    }
  })
  return result
}