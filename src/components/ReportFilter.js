import React, {Component} from 'react'

import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog'
import DatePicker from 'material-ui/DatePicker'

class ReportFilter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dialogOpen: false,
      startDate: new Date(),
      endDate: new Date()
    }
  }

  handleOpenDialog = () => {
    this.setState({dialogOpen:true})
  }

  handleCloseDialog = () => {
    this.setState({dialogOpen:false})
  }

  handleStartDateChange = (e, date) => {
    this.setState({
      startDate: date
    })
  }

  handleEndDateChange = (e, date) => {
    this.setState({
      endDate: date
    })
  }

  render() {
    return (
      <div className="report-filter">
        <div className="filter-criteria first">
          <TextField
            name="keyword"
            placeholder="Search keyword"
          />
        </div>        
        <div className="filter-criteria filter-duration" onClick={this.handleOpenDialog}>
          This week <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div>
        <Dialog
          open={this.state.dialogOpen}
          onRequestClose={this.handleCloseDialog}
        >
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <DatePicker 
                autoOk={true}
                hintText="Start date" 
                value={this.state.startDate} 
                onChange={this.handleStartDateChange}
              />
            </div>
            <div className="col-xs-12 col-sm-6">
              <DatePicker 
                autoOk={true}
                hintText="End date" 
                value={this.state.endDate} 
                onChange={this.handleEndDateChange}
              />
            </div>            
          </div>
          <div className="row">
            <div className="col-xs-12" style={{textAlign: 'center'}}>
            Today, This Week, This Month, This Year <br/>
            Yesterday, Last Week, Last Month, Last Year
            </div>
          </div>
        </Dialog>        
      </div> 
    )
  }
}

export default ReportFilter