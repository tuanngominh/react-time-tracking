import React, {Component, PropTypes} from 'react'
import {getTimeDuration, toAmPm, fromAmPM, fromAmPmToDate} from '../utils/time'

import {changeText, changeStartTime, stop, start, pull} from '../actions/timeEntryInput'
import {connect} from 'react-redux'

import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog'

import TimeEntryInputForm from './TimeEntryInputForm'

export class TimeEntryInput extends Component {
  static propTypes = {
    startTime: PropTypes.string,
    text: PropTypes.string,
    uid: PropTypes.string,
    onChangeText: PropTypes.func,
    onChangeStartTime: PropTypes.func,
    onStop: PropTypes.func,
    onStart: PropTypes.func,
    onPull: PropTypes.func,
    isFetching: PropTypes.bool
  }

  static defaultProps = {
    isFetching: false
  }

  constructor (props) {
    super(props)

    const startTime = props.startTime ? new Date(props.startTime) : null
    const startTimeAmPm = props.startTime ? toAmPm(startTime) : null

    this.state = {
      dialogOpen: false,
      text : props.text,
      startTime: startTime,
      startTimeAmPm: startTimeAmPm,
      duration: null,
      timerId: null
    }
  }

  componentWillMount() {
    this.props.onPull(this.props.uid)

    this.startTicking()
  }  

  componentWillUnmount() {
    if (this.state.timerId) {
      clearInterval(this.state.timerId)
      this.setState({timerId: null})
    }
  }

  stopTicking = () => {
    //clear previous timer if any
    if (this.state.timerId) {
      clearInterval(this.state.timerId)
      this.setState({timerId: null})
    }
  }

  startTicking = () => {
    if (this.state.startTime) {
      //setup new timer to show duration
      let timerId = setInterval(()=>{
        const now = new Date()        
        this.setState({
          duration: getTimeDuration(this.state.startTime, now)
        })
      }, 1000)

      this.setState({
        timerId: timerId
      })      
    }    
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.startTime) {
      const startTime =  new Date(nextProps.startTime)
      const startTimeAmPm = toAmPm(startTime)
      let nextState = {
        startTime: startTime,
        startTimeAmPm: startTimeAmPm
      }
      if (nextProps.text) {
        nextState.text = nextProps.text
      }
      this.setState(nextState, function(){
        this.stopTicking()
        this.startTicking()  
      })
    } else {
      this.stopTicking()
      this.setState({
        text: '',
        startTime: null,
        duration: null
      })
    }
  }

  handleOpenDialog = () => {
    this.setState({dialogOpen:true})
  }

  handleCloseDialog = () => {
    this.setState({dialogOpen:false})
  }

  handleChangeText = (text) => {
    //fire change text event if a time entry is tracking
    if (this.state.startTime) {
      this.props.onChangeText(text)  
    }
  }

  //validate input and save
  handleUpdateStartTimeAmPm = (e) => {
    const value = e.target.value
    
    const startTimeAmPm = fromAmPM(e.target.value)
    if (startTimeAmPm) {
      const now = new Date()
      const newStartTimeInDate = fromAmPmToDate(value, now)
      const newStartTimeAmPm = toAmPm(newStartTimeInDate)
      this.setState({
        startTime: newStartTimeInDate,
        startTimeAmPm: newStartTimeAmPm
      })
      this.props.onChangeStartTime(newStartTimeInDate)
    } 
    //invalid input, revert to current value
    else {
      this.setState({
        startTimeAmPm: toAmPm(this.state.startTime)
      })
    }
  }

  //just save user input during typing
  handleChangeStartTimeAmPm = (e) => {
    this.setState({
      startTimeAmPm: e.target.value
    })
  }

  handleStart = (text) => {
    this.props.onStart(this.props.uid, text, new Date())
  }

  handleStop = () => {
    this.props.onStop(this.props.uid, this.state.text, this.state.startTime)
  }

  render() {
    return (
      <div>
        <TimeEntryInputForm
          text={this.state.text}
          duration={this.state.duration}
          isFetching={this.props.isFetching}
          onChangeText={this.handleChangeText}            
          onOpenDialog={this.handleOpenDialog}
          onStop={this.handleStop}
          onStart={this.handleStart}
        />
        <Dialog
          open={this.state.dialogOpen}
          onRequestClose={this.handleCloseDialog}
          contentStyle={{width: 250}}
        >
          Start <TextField
            value={this.state.startTimeAmPm}
            style={{marginLeft: 30, width: 80}}
            onChange={this.handleChangeStartTimeAmPm}
            onBlur={this.handleUpdateStartTimeAmPm}
            name="startTimeAmPm"
          />
          <br />
          End <span
            style={{marginLeft: 35, width: 80}}
          >{toAmPm(new Date())}</span>
        </Dialog>
      </div> 
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeText: (text) => {
      dispatch(changeText(text))
    },
    onChangeStartTime: (date) => {
      dispatch(changeStartTime(date))
    },
    onStop: (uid, text, date) => {
      dispatch(stop(uid, text, date))
    },
    onStart: (uid, text, date) => {
      dispatch(start(uid, text, date))
    },
    onPull: (uid) => {
      dispatch(pull(uid))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    startTime: state.timeEntryInput.startTime,
    text: state.timeEntryInput.text,
    uid: state.auth.user.uid,
    isFetching: state.timeEntryInput.isFetching
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeEntryInput)