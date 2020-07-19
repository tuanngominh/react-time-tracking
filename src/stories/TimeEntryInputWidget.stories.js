import React from "react";
import { action } from "@storybook/addon-actions";
import { TimeEntryInputWidget } from "../components/TimeEntryInputWidget";
import moment from "moment";

export default {
  title: "TimeEntryInputWidget",
};
export const NoEntry = () => (
  <TimeEntryInputWidget
    onCreate={action("onCreate")}
    onUpdate={action("onUpdate")}
  />
);

export const Tracking = () => {
  const start = moment().subtract(1, "hours").toDate();
  const entry = {
    id: 1,
    start,
    title: "Tracking task",
  };
  return (
    <TimeEntryInputWidget
      onCreate={action("onCreate")}
      onUpdate={action("onUpdate")}
      entry={entry}
    />
  );
};
