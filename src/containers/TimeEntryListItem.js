import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {get} from 'lodash'

import {toAmPm} from '../utils/time'

import {remove} from '../actions/timeEntries'

import {TableRow, TableRowColumn} from 'material-ui/Table'
import TextField from 'material-ui/TextField'
import FlatButton  from 'material-ui/FlatButton'

import FontIcon from 'material-ui/FontIcon'

export class TimeEntryListItem extends Component {
  static propTypes = {
    uid: PropTypes.string,
    id: PropTypes.string,
    text: PropTypes.string,
    startTime: PropTypes.instanceOf(Date),
    endTime: PropTypes.instanceOf(Date)
  }
  componentWillMount() {
    this.setState({
      text: this.props.text
    })   
  }
  handleRemove = () => {
    this.props.onRemove(this.props.uid, this.props.id)
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
              onClick={this.handleRemove}
            />
          </div>
        </TableRowColumn>
      </TableRow>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onRemove: (uid, entryId) => {
      dispatch(remove(uid, entryId))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    uid: get(state,"auth.user.uid", null)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeEntryListItem)