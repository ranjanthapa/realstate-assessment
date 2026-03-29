import { z } from "zod";
export const LoginSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z.string(),
});
