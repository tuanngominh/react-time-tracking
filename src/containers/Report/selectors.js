import { createSelector } from 'reselect'
import moment from 'moment'
import {isSameDate} from '../../utils/timeEntries'

const getEntries = (state) => state.report.entries
const getStartDate = (state) => state.report.startDate
const getEndDate = (state) => state.report.endDate

//Get total effort by day which will show in a bar chart later
export const getEffortByDayForBarChart = createSelector(
  [getEntries, getStartDate, getEndDate],
  (entries, startDate, endDate) => {
    let labels = [], data = []

    if (startDate > endDate) {
      return { labels, data }
    }

    while (startDate <= endDate) {
      labels.push(moment(startDate).format('Do MMM'))

      //sum effort by startDate
      let totalDuration = moment.duration()
      Object.keys(entries).forEach((key) => {
        const entry = entries[key]
        if (isSameDate(entry.startTime, startDate)) {
          const ms = moment(entry.endTime).diff(moment(entry.startTime))
          const duration = moment.duration(ms)
          totalDuration.add(duration)
        }
      })
      data.push(totalDuration.asMilliseconds())

      startDate.setDate(startDate.getDate() + 1)
    }

    return {
      labels,
      data
    }
  }
)