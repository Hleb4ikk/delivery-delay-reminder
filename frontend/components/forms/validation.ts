import { ZodObject } from "zod";
import { formDataToObject } from "./utils";
import { z } from "zod";
import type { FormErrors } from "./types";

export const validateForm = <T extends ZodObject<any>>(
  formData: FormData,
  schema: T
):
  | { success: true; data: z.infer<T> }
  | { success: false; errors: FormErrors<z.infer<T>> } => {
  const result = schema.safeParse(formDataToObject(formData, schema));

  if (!result.success) {
    return {
      success: false,
      errors: z.treeifyError(result.error).properties as FormErrors<
        z.infer<typeof schema>
      >,
    };
  }
  return { success: true, data: result.data };
};
