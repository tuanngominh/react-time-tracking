import { TimeEntryInput } from "./TimeEntryInput";
import { screen, render, fireEvent } from "@testing-library/react";
import React from "react";

test("not start tracking yet should have start button", () => {
  render(<TimeEntryInput />);
  expect(screen.getByTestId("start-button")).toBeInTheDocument();
});

test("start tracking should return time entry name", () => {
  render(<TimeEntryInput />);
  const button = screen.getByTestId("start-button");
  fireEvent.click(button);
  expect(screen.getByTestId("duration")).toBeInTheDocument();
});

test("during a time entry, there should be stop button", () => {
  render(<TimeEntryInput />);
  const button = screen.getByTestId("start-button");
  fireEvent.click(button);
  expect(screen.getByTestId("stop-button")).toBeInTheDocument();
});

test("during a time entry, there should be duration", () => {
  render(<TimeEntryInput />);
  const button = screen.getByTestId("start-button");
  fireEvent.click(button);
  expect(screen.getByTestId("duration")).toBeInTheDocument();
});

test("during a time entry, click stop button should show start button", () => {});

test("during a time entry, click stop button should call save", () => {});
