import { z } from "zod";
import { CarrierNames } from "@/types";

export const authSchema = z.object({
  mobileNumber: z
    .string()
    .refine((value) => /^[+]{1}(?:[0-9-()/.]\s?){6,15}[0-9]{1}$/.test(value)),
});
