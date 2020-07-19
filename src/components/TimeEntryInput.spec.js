// import { TimeEntryInput } from "./TimeEntryInput";
// import { fireEvent, screen, render } from "@testing-library/react";
// import React from "react";
//
// jest.mock("./TimeEntryStore", () => ({
//   createTimeEntry: jest.fn(),
// }));
//
// import { createTimeEntry } from "./TimeEntryStore";
//
// test("Click start button will create new time entry", () => {
//   render(<TimeEntryInput />);
//   const button = screen.getByTestId("start-button");
//   fireEvent.click(button);
//   expect(createTimeEntry).toBeCalledTimes(1);
//   expect(createTimeEntry.mock.calls[0][0].start).toBeInstanceOf(Date);
// });
