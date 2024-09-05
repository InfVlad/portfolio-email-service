import { Hono } from "hono";
import { postMessage } from "../controllers/message-controller";
import { handleErrorMiddleware } from "../middlewares/error-handler";
import { corsMiddleware } from "../middlewares/cors";
import { limiterMiddleware } from "../middlewares/rate-limiter";

const app = new Hono();

app.get("/", (c) => c.text("Vladimir's Portfolio API"));

// Middleware
app.use("/api/send-email/*", corsMiddleware);
app.use("/api/send-email/*", limiterMiddleware);

// Routes
app.post("/api/send-email", postMessage);

// Not found handler
app.notFound((c) => c.json({ error: "Resource not found" }, 404));

// Global error handling (if any)
app.onError((err, c) => handleErrorMiddleware(c, err));

export default app;
