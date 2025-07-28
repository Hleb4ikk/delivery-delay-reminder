import z from 'zod';

export type ValidationErrors = {
  [K in keyof z.infer<typeof z.ZodObject>]: { errors: string[] };
};
