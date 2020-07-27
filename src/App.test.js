import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("render todos", async () => {
  render(<App />);
  screen.debug();
  expect(await screen.findAllByRole("listitem").length).toBe(1);
});
