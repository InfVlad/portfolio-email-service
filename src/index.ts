import { Hono } from "hono";
import { cors } from "hono/cors";
// import type { ContactMessage } from "./types/contact-message";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/", (c) => c.text("Vladimir's Portfolio API"));
app.notFound((c) => c.json({ message: "Not Found", ok: false }, 404));

app.use("/message/*", cors());
app.post("/message", async (c) => {
  // const message = await c.req.json<ContactMessage>();
  // const ok = ;
  // return c.json({ ok });
});

export default app;
