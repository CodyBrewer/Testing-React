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
    const div = getByTestId("App-div");
    expect(div).toHaveClass("App");
  });
  test("should render header within div", () => {
    const { getByTestId } = render(<App />);
    const div = getByTestId("App-div");
    const header = within(div).getByTestId("App-header");
    expect(header).toBeInTheDocument();
  });
  test("should render logo img within header", () => {
    const { getByTestId, getByAltText } = render(<App />);
    const div = getByTestId("App-div");
    const header = within(div).getByTestId("App-header");
    const logoImage = within(header).getByAltText("logo");
    expect(logoImage).toBeInTheDocument();
  });
});
