import { Context } from "hono";
import { safeParse } from "valibot";
import { createTransport } from "nodemailer";
import { ContactMessageSchema } from "../schemas/contact-message";
import { CustomError } from "../utils/custom-error";
import { getValidationIssues } from "../utils/get-error-details";
import type { ContactMessage } from "../types/contact-message";
import { handleErrorMiddleware } from "../middlewares/error-handler";

export const postMessage = async (c: Context) => {
  try {
    const body = await c.req.json<ContactMessage>();
    const parsedResult = safeParse(ContactMessageSchema, body);

    if (!parsedResult.success) {
      const errorDetails = getValidationIssues(parsedResult.issues);
      throw new CustomError("Bad Request", 400, errorDetails);
    }

    const { name, email, subject, message } = parsedResult.output;

    const transporter = createTransport({
      host: process.env.EMAIL_SERVICE,
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_SENDER,
      to: process.env.EMAIL_DESTINY,
      subject: "Hello! Someone sent you a message from your Portfolio!",
      text: `${name} \nemail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    });

    if (process.env.DEBUG === "true") {
      console.log("Message sent: %s", info.messageId, "contact email:", email);
    }

    return c.json({
      message: `${name}, thank you for your message!`,
    });
  } catch (error) {
    return handleErrorMiddleware(c, error);
  }
};
