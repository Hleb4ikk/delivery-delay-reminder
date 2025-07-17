import { z, ZodObject } from "zod";

export function formDataToObject(formData: FormData, schema: ZodObject) {
  type Schema = z.infer<typeof schema>;

  return Object.fromEntries(formData.entries()) as Schema;
}
