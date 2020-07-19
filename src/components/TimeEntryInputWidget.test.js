import { TimeEntryInputWidget } from "./TimeEntryInputWidget";
import { screen, render, fireEvent } from "@testing-library/react";
import React from "react";
import moment from "moment";

let onCreate, onUpdate, entry;
beforeEach(() => {
  onCreate = jest.fn();
  onUpdate = jest.fn();
  entry = {
    id: 1,
    title: "tracking task",
    start: moment().subtract(1, "hour").toDate(),
  };
});

test("not start tracking yet should have start button", () => {
  render(<TimeEntryInputWidget onCreate={onCreate} onUpdate={onUpdate} />);
  expect(screen.getByTestId("start-button")).toBeInTheDocument();
});

test("start tracking should call create entry", () => {
  render(<TimeEntryInputWidget onCreate={onCreate} onUpdate={onUpdate} />);
  const button = screen.getByTestId("start-button");
  fireEvent.click(button);
  expect(onCreate).toBeCalledTimes(1);
});

test("during a time entry, there should be stop button", () => {
  const start = new Date();
  render(
    <TimeEntryInputWidget
      onCreate={onCreate}
      onUpdate={onUpdate}
      entry={entry}
    />
  );
  expect(screen.getByTestId("stop-button")).toBeInTheDocument();
});

test("during a time entry, there should be duration", () => {
  render(
    <TimeEntryInputWidget
      onCreate={onCreate}
      onUpdate={onUpdate}
      entry={entry}
    />
  );
  expect(screen.getByTestId("duration")).toBeInTheDocument();
});

test("during a time entry, click stop button should show start button", () => {
  render(
    <TimeEntryInputWidget
      onCreate={onCreate}
      onUpdate={onUpdate}
      entry={entry}
    />
  );
  fireEvent.click(screen.getByTestId("stop-button"));
  expect(screen.getByTestId("start-button")).toBeInTheDocument();
});

test("during a time entry, click stop button should call save", () => {
  render(
    <TimeEntryInputWidget
      onCreate={onCreate}
      onUpdate={onUpdate}
      entry={entry}
    />
  );
  fireEvent.click(screen.getByTestId("stop-button"));
  expect(onUpdate).toHaveBeenCalledTimes(1);
  expect(onUpdate.mock.calls[0][0].id).toBe(1);
  expect(onUpdate.mock.calls[0][0].end).toBeTruthy();
});
