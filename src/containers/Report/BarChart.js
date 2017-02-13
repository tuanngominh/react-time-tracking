import React, {Component, PropTypes} from 'react'
import moment from 'moment'

import {Bar} from 'react-chartjs-2'
import {red400} from 'material-ui/styles/colors';

class BarChart extends Component {
  static propTypes = {
    labels: PropTypes.array,
    data: PropTypes.array
  }

  static defaultProps = {
    labels: [],
    data: []
  }

  render() {
    const durationsInHour = this.props.data.map((miliseconds) => {
      if (miliseconds === 0) {
        return 0
      }

      const duration = moment.duration(miliseconds)
      return duration.asHours() + Math.round(duration.minutes() / 60, 2)
    })

    const durationInHourMinute = this.props.data.map((miliseconds) => {
      if (miliseconds === 0) {
        return 0
      }
      
      const duration = moment.duration(miliseconds)
      return Math.floor(duration.asHours()) + ':' + duration.minutes()
    })


    const data = {
      labels: this.props.labels,
      datasets: [
        {
          label: 'Effort per day',
          backgroundColor: red400,
          data: durationsInHour
        }
      ]
    }
    const options = {
      tooltips: {
        callbacks: {
          label: (tooltipItem, data) => {
            return durationInHourMinute[tooltipItem.index]
          },
          title: () => ('')
        }
      },
      legend: {
        display: false
      }
    } 
    return <Bar 
      data={data} 
      height={100}
      options={options}
    />
  }
}

export default BarChart