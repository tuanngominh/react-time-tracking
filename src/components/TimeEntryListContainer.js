import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {get} from 'lodash'

import {fetchList} from '../actions/timeEntries'

import {groupByDay} from '../utils/timeEntries'

import TimeEntryListItemsByDay from '../components/TimeEntryListItemsByDay'

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