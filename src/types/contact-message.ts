import type { InferInput } from "valibot";
import { ContactMessageSchema } from "../schema/contact-message";

export type ContactMessage = InferInput<typeof ContactMessageSchema>;
