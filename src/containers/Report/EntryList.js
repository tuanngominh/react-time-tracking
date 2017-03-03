import React, {Component, PropTypes} from 'react'
import {getTimeDuration, toAmPm, pad0Left} from '../../utils/time'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRowColumn, TableRow} from 'material-ui/Table'

class ReportEntryList extends Component {
  static propTypes = {
    entries: PropTypes.object
  }
  render() {
    const getDateMonth = (time) => {
      if (typeof time === 'string' || typeof time === 'number') {
        time = new Date(time)
      }
      return pad0Left((time.getMonth() + 1)) + '/' + pad0Left(time.getDate())
    }
    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Time Entry</TableHeaderColumn>
            <TableHeaderColumn>Duration</TableHeaderColumn>
          </TableRow>
        </TableHeader>      
        <TableBody displayRowCheckbox={false}>
          {
            Object.keys(this.props.entries).map((key) => {
              const entry = this.props.entries[key]
              return (
                <TableRow key={key}>
                  <TableRowColumn>
                    {entry.text}
                  </TableRowColumn>
                  <TableRowColumn>{getTimeDuration(entry.startTime, entry.endTime)}</TableRowColumn>
                </TableRow>              
              )
            })
          }
        </TableBody>
      </Table>
    )
  }
}

export default ReportEntryList