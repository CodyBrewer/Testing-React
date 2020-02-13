import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { getData as mockData } from "../api";
import "@testing-library/jest-dom/extend-expect";
import StarWarsCharacters from "./StarWarsCharacters";

jest.mock("../api");

test("should render character  data, next button and previous button", async () => {
  mockData.mockResolvedValueOnce({
    results: [
      {
        name: "luke skywalker",
        url: "lukeUrl"
      }
    ],
    next: "abcde",
    previous: "abcd"
  });

  const { getByText } = render(<StarWarsCharacters />);
  const nextButton = getByText(/next/i);
  const prevButton = getByText(/previous/i);

  fireEvent.click(nextButton);
  fireEvent.click(prevButton);

  expect(mockData).toHaveBeenCalledTimes(1);

  await wait(() => expect(getByText(/luke/i)));
});
