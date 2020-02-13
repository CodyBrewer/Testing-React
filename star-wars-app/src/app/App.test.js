import React from "react";
import { cleanup, render, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

afterEach(cleanup);

describe("App", () => {
  test("should render without crashing", () => {
    render(<App />);
  });
});
