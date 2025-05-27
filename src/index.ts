import app from "./routes";

export default {
  port: process.env.PORT,
  fetch: app.fetch,
};
