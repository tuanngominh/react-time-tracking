import React, {Component, PropTypes} from 'react'
import {getTimeDuration, toAmPm, fromAmPM, fromAmPmToDate} from '../utils/time'

import {red500} from 'material-ui/styles/colors'

import RaisedButton from 'material-ui/RaisedButton'
import FlatButton  from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog'

class TimeEntryInputForm extends Component {
  static propTypes = {
    text: PropTypes.string,
    onTextChange: PropTypes.func,
    duration: PropTypes.string,
    onOpenDialog: PropTypes.func
  }

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        <TextField
          hintText="What are you doing ?"
          value={this.props.text}
          onChange={this.props.onTextChange}
          name="text"
        />
        <span 
          onTouchTap={this.props.onOpenDialog}
          style={{
            minWidth: 56,
            display: 'inline-block'
          }}
        >
          {this.props.duration}
        </span>
        <RaisedButton
          icon={<FontIcon className="material-icons" style={{color: red500, width: 50, fontSize: 30}}>stop</FontIcon>}
          style={{
            marginLeft: 20,
            minWidth: 50
          }}
          buttonStyle={{
            width: 50
          }}
        />
        <FlatButton 
          icon={<FontIcon className="material-icons" style={{color: 'grey', width: 50, fontSize: 20}}>delete</FontIcon>}
          style={{
            marginLeft: 20,
            minWidth: 50
          }}
          buttonStyle={{
            width: 50
          }}
        />
      </div> 
    )
  }
}

export default TimeEntryInputForm