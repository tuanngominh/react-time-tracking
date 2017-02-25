import React, {Component, PropTypes} from 'react'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table'

import TimeEntryListItemContainer from './TimeEntryListItemContainer'

class TimeEntryListItemsByDay extends Component {
  static propTypes = {
    entries: PropTypes.array
  }
  render() {
    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn colSpan="3">{this.props.date}</TableHeaderColumn>
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
                />
              )
            })
          }
        </TableBody>
      </Table>
    )
  }
}

export default TimeEntryListItemsByDay