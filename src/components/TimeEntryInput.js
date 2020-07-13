import { TimeEntryInputWidget } from "./TimeEntryInputWidget";
import { createTimeEntry } from "./TimeEntryStore";
import React from "react";

export class TimeEntryInput extends React.Component {
  render() {
    return <TimeEntryInputWidget onCreate={createTimeEntry} />;
  }
}
