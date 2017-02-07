import React, {Component, PropTypes} from 'react'

import {toAmPm} from '../utils/time'

import {TableRow, TableRowColumn} from 'material-ui/Table'
import TextField from 'material-ui/TextField'
import FlatButton  from 'material-ui/FlatButton'

import FontIcon from 'material-ui/FontIcon'

class TimeEntryListItem extends Component {
  static propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    startTime: PropTypes.string,
    endTime: PropTypes.string
  }
  componentWillMount() {
    this.setState({
      text: this.props.text
    })   
  }
  handleClick = () => {
    console.log(this.props.id)
  }
  handleChangeText = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return(
      <TableRow>
        <TableRowColumn>
          <div onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}>
            <TextField
              name='text'
              value={this.state.text}
              onChange={this.handleChangeText}
              underlineShow={false}
            />
          </div>
        </TableRowColumn>
        <TableRowColumn>{toAmPm(this.props.startTime)} - {toAmPm(this.props.endTime)}</TableRowColumn>
        <TableRowColumn>
          <div onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}>
            <FlatButton
              icon={<FontIcon className="material-icons" style={{color: 'grey', width: 50, fontSize: 20}}>delete</FontIcon>}
              onClick={this.handleClick}
            />
          </div>
        </TableRowColumn>
      </TableRow>
    )
  }
}

export default TimeEntryListItem