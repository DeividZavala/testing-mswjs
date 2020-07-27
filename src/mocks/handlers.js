import { rest } from "msw";

export const handlers = [
  rest.get("/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ todos: [{ id: 1, body: "first todo" }] })
    );
  }),
];
