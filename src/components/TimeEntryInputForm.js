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
    duration: PropTypes.string,
    onTextChange: PropTypes.func,    
    onOpenDialog: PropTypes.func,
    onStop: PropTypes.func,
    onDelete: PropTypes.func,
    onStart: PropTypes.func
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
            marginLeft: 20,
            minWidth: 56,
            display: 'inline-block'
          }}
        >
          {this.props.duration ? this.props.duration : '0:00:00'}
        </span>
        {
          this.props.duration
          ?
          <RaisedButton
            icon={<FontIcon className="material-icons" style={{color: red500, width: 50, fontSize: 30}}>stop</FontIcon>}
            style={{
              marginLeft: 20,
              minWidth: 50
            }}
            buttonStyle={{
              width: 50
            }}
            onClick={this.props.onStop}
          />
          :
          ''
        }

        {
          this.props.duration
          ?
          <FlatButton 
            icon={<FontIcon className="material-icons" style={{color: 'grey', width: 50, fontSize: 20}}>delete</FontIcon>}
            style={{
              marginLeft: 20,
              minWidth: 50
            }}
            buttonStyle={{
              width: 50
            }}
            onClick={this.props.onDelete}
          />
          :
          ''
        }

        {
          !this.props.duration
          ?
          <FlatButton 
            icon={<FontIcon className="material-icons" style={{color: 'green', width: 50, fontSize: 30}}>play_arrow</FontIcon>}
            style={{
              marginLeft: 20,
              minWidth: 50
            }}
            buttonStyle={{
              width: 50
            }}
            onClick={this.props.onStart}
          />
          :
          ''
        }        
      </div> 
    )
  }
}

export default TimeEntryInputForm