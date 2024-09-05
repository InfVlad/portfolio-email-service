import type { Context } from "hono";

export const handleErrorMiddleware = (c: Context, error: any) => {
  const statusCode = error?.statusCode || 500;
  const message = error?.message || "Internal Server Error";

  // Log the error details (optional)
  if (process.env.DEBUG === "true")
    console.error(`[ERROR] ${message}`, error.statusCode, error.details);

  return c.json(
    {
      message,
      error: error.details || null,
    },
    statusCode
  );
};
