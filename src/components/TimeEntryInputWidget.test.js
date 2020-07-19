import { TimeEntryInputWidget } from "./TimeEntryInputWidget";
import { screen, render, fireEvent } from "@testing-library/react";
import React from "react";

let onCreate, onUpdate;
beforeEach(() => {
  onCreate = jest.fn();
  onUpdate = jest.fn();
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
      start={start}
    />
  );
  expect(screen.getByTestId("stop-button")).toBeInTheDocument();
});

test("during a time entry, there should be duration", () => {
  const start = new Date();
  render(
    <TimeEntryInputWidget
      onCreate={onCreate}
      onUpdate={onUpdate}
      start={start}
    />
  );
  expect(screen.getByTestId("duration")).toBeInTheDocument();
});

test("during a time entry, click stop button should show start button", () => {
  const start = new Date();
  render(
    <TimeEntryInputWidget
      onCreate={onCreate}
      onUpdate={onUpdate}
      start={start}
    />
  );
  fireEvent.click(screen.getByTestId("stop-button"));
  expect(screen.getByTestId("start-button")).toBeInTheDocument();
});

test("during a time entry, click stop button should call save", () => {
  const start = new Date();
  render(
    <TimeEntryInputWidget
      onCreate={onCreate}
      onUpdate={onUpdate}
      start={start}
    />
  );
  fireEvent.click(screen.getByTestId("stop-button"));
  expect(onUpdate).toHaveBeenCalledWith({});
});
