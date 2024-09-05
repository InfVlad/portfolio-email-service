import { string, object } from "valibot";

export const ContactMessageSchema = object({
  name: string(),
  email: string(),
  subject: string(),
  message: string(),
});
