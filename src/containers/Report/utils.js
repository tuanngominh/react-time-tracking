import moment from 'moment'

export const durationInHour = (miliseconds) => {
  if (miliseconds === 0) {
    return 0
  }

  const duration = moment.duration(miliseconds)
  return duration.asHours() + Math.round(duration.minutes() / 60, 2)
}

export const durationInHourMinute = (miliseconds) => {
  if (miliseconds === 0) {
    return 0
  }
  
  const duration = moment.duration(miliseconds)
  return Math.floor(duration.asHours()) + ':' + duration.minutes()
}