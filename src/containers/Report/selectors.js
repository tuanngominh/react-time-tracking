import { createSelector } from 'reselect'
import moment from 'moment'
import 'moment-duration-format'
import {isSameDate} from '../../utils/timeEntries'

const getEntries = (state) => state.report.entries
const getStartDate = (state) => state.report.startDate
const getEndDate = (state) => state.report.endDate

//Get total effort by day which will show in a bar chart later
export const getSummaryReport = createSelector(
  [getEntries, getStartDate, getEndDate],
  (entries, filterStartDate, filterEndDate) => {
    let labels = [], data = []

    const startDate = new Date(filterStartDate)
    const endDate = new Date(filterEndDate)
    if (startDate > endDate) {
      return { labels, data }
    }

    if (!entries) {
      while (startDate <= endDate) {
        labels.push(moment(startDate).format('Do MMM'))
        data.push(0)
        startDate.setDate(startDate.getDate() + 1)
      }
      return { labels, data }
    }

    let totalDuration = moment.duration()
    while (startDate <= endDate) {
      labels.push(moment(startDate).format('Do MMM'))

      //sum effort by startDate
      let totalDurationByDay = moment.duration()
      Object.keys(entries).forEach((key) => {
        const entry = entries[key]
        if (isSameDate(entry.startTime, startDate)) {
          const ms = moment(entry.endTime).diff(moment(entry.startTime))
          const duration = moment.duration(ms)
          totalDurationByDay.add(duration)
        }
      })
      data.push(totalDurationByDay.asMilliseconds())

      totalDuration.add(totalDurationByDay)

      startDate.setDate(startDate.getDate() + 1)
    }

    return {
      totalEffort: moment.duration(totalDuration, "minutes").format("hh:mm"), 
      effortByDayForBarChart: {
        labels,
        data
      }
    }
  }
)