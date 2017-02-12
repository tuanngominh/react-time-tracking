import React, {Component} from 'react'
import {get} from 'lodash'
import {connect} from 'react-redux'

import ReportFilter from './Report/Filter'
import ReportEntryList from './Report/EntryList'

class Report extends Component {
  render() {
    let startDate = new Date()
    startDate.setDate(startDate.getDate() -31 )
    const endDate = new Date()

    return (
      <div className="row">
        <div className="col-xs-12
          col-sm-offset-2 col-sm-8
          col-md-offset-2 col-md-8
          col-lg-offset-2 col-lg-8
          ">
          <ReportFilter startDate={startDate} endDate={endDate}/>
          <ReportEntryList entries={this.props.entries} />
        </div>
      </div>
    )    
  }
}

const mapStateToProps = (state) => {
  return {
    entries: get(state,"report.entries", {}),    
    isFetching: get(state, "report.isFetching", null)
  }
}

export default connect(
  mapStateToProps,
  null
)(Report)