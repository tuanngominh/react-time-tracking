import React, {Component} from 'react'
import {getTimeDuration, toAmPm, fromAmPM, fromAmPmToDate} from '../utils/time'

import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog'

class TimeEntryInput extends Component {
  constructor (props) {
    super(props)

    const startTime = new Date(props.startTime)
    const startTimeAmPm = toAmPm(startTime)

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

  componentWillUnmount() {
    if (this.state.timerId) {
      clearInterval(this.state.timerId)
      this.setState({timerId: null})
    }
  }

  handleOpenDialog = () => {
    this.setState({dialogOpen:true})
  }

  handleCloseDialog = () => {
    this.setState({dialogOpen:false})
  }

  handleTextChange = (e) => {
    console.log(e.target.value)
    e.preventDefault()
    this.setState({
      text: e.target.value
    })    
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

  render() {
    return (
      <div>
        <TextField
          hintText="What are you doing ?"
          value={this.state.text}
          onChange={this.handleTextChange}
          name="text"
        />
        <span onTouchTap={this.handleOpenDialog}>{this.state.duration}</span>
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

export default TimeEntryInput