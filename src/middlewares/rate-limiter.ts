import { rateLimiter } from "hono-rate-limiter";

export const limiterMiddleware = rateLimiter({
  windowMs: 5 * 60 * 1000, // 5 minutes
  limit: 15, // Limit each IP to 15 requests per `window` (here, per 5 minutes).
  standardHeaders: "draft-6", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  keyGenerator: (c) => "<unique_key>", // Method to generate custom identifiers for clients.
  // store: ... , // Redis, MemoryStore, etc. See below.
});
