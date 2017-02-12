import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {get} from 'lodash'

import {getDurationInNaturalDescription} from '../../utils/time'
import {fetch} from '../../actions/report'

import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog'
import DatePicker from 'material-ui/DatePicker'

export class ReportFilter extends Component {
  static propTypes = {
    startDate: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date)
    ]),
    endDate: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date)
    ]),
    onChange: PropTypes.func
  }

  static defaultProps = {
    text: '',
    startDate: (new Date()),
    endDate: null
  }

  constructor(props) {
    super(props)

    const toDate = (date) => {
      if (typeof date === 'string') {
        date = new Date(date)
      }
      return date
    }

    this.state = {
      text: '',      
      startDate: toDate(this.props.startDate),
      endDate: toDate(this.props.endDate),
      changeTextSubmitTimeoutId: null,
      dialogOpen: false
    }
  }

  componentWillMount() {
    const {text, startDate, endDate} = this.state
    this.props.onChange(this.props.uid, text, startDate, endDate)    
  }

  handleOpenDialog = () => {
    this.setState({dialogOpen:true})
  }

  handleCloseDialog = () => {
    this.setState({dialogOpen:false})

    const {text, startDate, endDate} = this.state
    this.props.onChange(this.props.uid, text, startDate, endDate)
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

  handleChangeText = (e) => {    
    const text = e.target.value
    this.setState({
      text: text
    })

    if (this.state.startDate) {
      if (this.state.changeTextSubmitTimeoutId) {
        clearTimeout(this.state.changeTextSubmitTimeoutId)
      }

      const timeout = setTimeout(() => {
        this.props.onChange(this.props.uid, this.state.text, this.state.startDate, this.state.endDate)
      }, 1000)
      this.setState({
        changeTextSubmitTimeoutId: timeout
      })
      
    }    
  }

  render() {
    return (
      <div className="report-filter">
        <div className="filter-criteria first">
          <TextField
            value={this.state.text}
            onChange={this.handleChangeText}
            name="keyword"
            placeholder="Search keyword"
          />
        </div>        
        <div className="filter-criteria filter-duration" onClick={this.handleOpenDialog}>
          {getDurationInNaturalDescription(this.state.startDate, this.state.endDate)} <i className="fa fa-angle-down" aria-hidden="true"></i>
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

const mapStateToProps = (state) => {
  return {
    uid: get(state,"auth.user.uid", null)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (uid, text, startDate, endDate) => {
      dispatch(fetch(uid, text, startDate, endDate))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportFilter)