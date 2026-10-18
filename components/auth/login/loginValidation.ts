import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { error: "Email is required" })
    .email({ error: "Invalid email address" }),
  password: z
    .string()
    .min(4, { error: "Password must be at least 4 characters" }),
});   
