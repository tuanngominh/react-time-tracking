import React, {Component} from 'react'
import {get} from 'lodash'
import {connect} from 'react-redux'
import {getEffortByDayForBarChart} from './Report/selectors.js'
import ReportFilter from './Report/Filter'
import ReportEntryList from './Report/EntryList'
import BarChart from './Report/BarChart'
import Paper from 'material-ui/Paper'

const style = {
  padding: 10,
  margin: 10,
  marginBottom: 30
}

class Report extends Component {
  render() {
    let startDate = new Date()
    startDate.setDate(startDate.getDate() - 7 )
    const endDate = new Date()

    return (
      <div className="row">
        <div className="col-xs-12
          col-sm-offset-2 col-sm-8
          col-md-offset-2 col-md-8
          col-lg-offset-2 col-lg-8
          ">
          <Paper style={style} zDepth={1} >
            <ReportFilter startDate={startDate} endDate={endDate}/>
          </Paper>
          
          <BarChart labels={this.props.reportBarChartData.labels} data={this.props.reportBarChartData.data} />
          <ReportEntryList entries={this.props.entries} />
          
        </div>
      </div>
    )    
  }
}

const mapStateToProps = (state) => {
  return {
    reportBarChartData: getEffortByDayForBarChart(state),
    entries: get(state,"report.entries", {}),    
    isFetching: get(state, "report.isFetching", null)
  }
}

export default connect(
  mapStateToProps,
  null
)(Report)