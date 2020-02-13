import React from "react";
import { cleanup, render, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StarWarsCharacters from "./StarWarsCharacters";

describe("Star Wars Component", () => {
  test("should render without Crashing", () => {
    render(<StarWarsCharacters />);
  });
});
