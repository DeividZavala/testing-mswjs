import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { server, rest } from "./mocks/server";
import App from "./App";

test("render todos", async () => {
  render(<App />);
  const items = await waitFor(() => screen.getAllByRole("listitem"));
  expect(items.length).toBe(1);
});

test("render todos", async () => {
  server.use(
    rest.get("http://localhost:4000/todos", (req, res, ctx) => {
      return res(ctx.status(500), ctx.json({ message: "http error" }));
    })
  );
  render(<App />);
  const error = await waitFor(() => screen.getByRole("heading"));
  expect(error).toBeInTheDocument();
});
