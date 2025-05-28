import app from "./routes";

Bun.serve({
  port: process.env.PORT,
  fetch: app.fetch,
});
