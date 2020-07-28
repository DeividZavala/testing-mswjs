import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:4000/todos", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([{ id: 1, body: "first todo" }]));
  }),
];
