import React from "react";
import { cleanup, render, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

afterEach(cleanup);

describe("App", () => {
  test("should render App component without crashing", () => {
    render(<App />);
  });
  test("should have div with the className of App", () => {});
  test("should have div with a header within it", () => {});
  test("should have a header that has a classname of App-header", () => {});

  test("header should image within it", () => {});
  test("image should have alt tag of logo", () => {});
  test("image should have image width of 300", () => {});
  test("should render StarWarsChararacters Component", () => {});
});
