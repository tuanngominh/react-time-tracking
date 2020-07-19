import { TimeEntryInputWidget } from "./TimeEntryInputWidget";
import * as store from "./TimeEntryStore";
import React from "react";

export class TimeEntryInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: null,
    };
  }

  handleCreate() {}

  render() {
    return (
      <TimeEntryInputWidget
        entry={this.state.entry}
        onCreate={store.createTimeEntry}
        onUpdate={store.updateTimeEntry}
      />
    );
  }

  componentDidMount() {
    store.getCurrent().then((entry) => {
      this.setState({
        entry,
      });
    });
  }
}
