import { TimeEntryInputWidget } from "./TimeEntryInputWidget";
import { screen, render, fireEvent } from "@testing-library/react";
import React from "react";

let onCreate;
beforeEach(() => {
  onCreate = jest.fn();
});

test("not start tracking yet should have start button", () => {
  render(<TimeEntryInputWidget onCreate={onCreate} />);
  expect(screen.getByTestId("start-button")).toBeInTheDocument();
});

test("start tracking should call create entry", () => {
  render(<TimeEntryInputWidget onCreate={onCreate} />);
  const button = screen.getByTestId("start-button");
  fireEvent.click(button);
  expect(onCreate).toBeCalledTimes(1);
});

test("during a time entry, there should be stop button", () => {
  render(<TimeEntryInputWidget onCreate={onCreate} />);
  const button = screen.getByTestId("start-button");
  fireEvent.click(button);
  expect(screen.getByTestId("stop-button")).toBeInTheDocument();
});

test("during a time entry, there should be duration", () => {
  render(<TimeEntryInputWidget onCreate={onCreate} />);
  const button = screen.getByTestId("start-button");
  fireEvent.click(button);
  expect(screen.getByTestId("duration")).toBeInTheDocument();
});

test("during a time entry, click stop button should show start button", () => {});

test("during a time entry, click stop button should call save", () => {});
