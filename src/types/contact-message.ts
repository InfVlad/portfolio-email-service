import type { InferInput } from "valibot";
import { ContactMessageSchema } from "../schemas/contact-message";

export type ContactMessage = InferInput<typeof ContactMessageSchema>;
