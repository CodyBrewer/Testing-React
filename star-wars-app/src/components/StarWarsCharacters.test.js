import React from "react";
import { cleanup, render, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StarWarsCharacters from "./StarWarsCharacters";

describe("Star Wars Component", () => {
  test("should render without Crashing", () => {
    render(<StarWarsCharacters />);
  });
  test("should render previous button", () => {
    const { getByText } = render(<StarWarsCharacters />);
    const prevButton = getByText("Previous");
    expect(prevButton).toBeInTheDocument();
  });
  test("should render next button", () => {
    const { getByText } = render(<StarWarsCharacters />);
    const nextButton = getByText("Next");
    expect(nextButton).toBeInTheDocument();
  });
});
