import React from "react";
import { cleanup, render, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

afterEach(cleanup);

describe("App", () => {
  test("should render without crashingq", () => {
    render(<App />);
  });
  test("should have div with className of app", () => {
    const { getByTestId } = render(<App />);
    const appDiv = getByTestId("App-div");
    expect(appDiv).toHaveClass("App");
  });
});
