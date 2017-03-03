import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {get} from 'lodash'
import {fetchList} from '../actions/timeEntries'
import {groupByDay} from '../utils/timeEntries'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table'
import TimeEntryListItemContainer from './TimeEntryListItemContainer'

export class TimeEntryListItemsByDay extends Component {
  static propTypes = {
    entries: PropTypes.array
  }
  render() {
    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn colSpan="4">{this.props.date}</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {
            this.props.entries.map((timeEntry) => {
              return (
                <TimeEntryListItemContainer 
                  key={timeEntry.key} 
                  text={timeEntry.text} 
                  id={timeEntry.key} 
                  startTime={timeEntry.startTime} 
                  endTime={timeEntry.endTime}
                  tagId={timeEntry.tagId}
                />
              )
            })
          }
        </TableBody>
      </Table>
    )
  }
}

export class TimeEntryListContainer extends Component {
  static propTypes = {
    onFetchList: PropTypes.func,
    entries: PropTypes.object
  }

  static defaultProps = {
    entries: {}
  }
 
  componentWillMount() {
    this.props.onFetchList(this.props.uid)
  }

  render() {
    const entriesByDay = groupByDay(this.props.entries)
    return(
      <div>
      {
        entriesByDay.map((e) => (
          <TimeEntryListItemsByDay key={e.date} date={e.date} entries={e.entries} />
        ))      
      }
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onFetchList: (uid) => {
      dispatch(fetchList(uid))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    entries: get(state,"timeEntries.entries", {}),
    uid: get(state,"auth.user.uid", null),
    isFetching: get(state, "timeEntries.isFetching", null)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeEntryListContainer)