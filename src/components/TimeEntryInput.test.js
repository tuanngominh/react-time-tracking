import { TimeEntryInput } from "./TimeEntryInput";
import { screen, render } from "@testing-library/react";
import React from "react";

test("not start tracking yet should have start button", () => {
  render(<TimeEntryInput />);
  expect(screen.getByRole("button")).toHaveTextContent("Start");
});

test("start tracking should return time entry name", () => {});

test("during a time entry, there should be stop button", () => {});

test("during a time entry, there should be duration", () => {});

test("during a time entry, click stop button should show start button", () => {});

test("during a time entry, click stop button should call save", () => {});
