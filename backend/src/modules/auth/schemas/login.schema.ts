import z from 'zod';

export const loginSchema = z.object({
  email: z.email({ message: 'Invalid email address' }),

  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(64, { message: 'Password must be at most 64 characters long' })
    .regex(/[a-z]/, {
      message: 'Password must contain at least one lowercase letter',
    })
    .regex(/[A-Z]/, {
      message: 'Password must contain at least one uppercase letter',
    })
    .regex(/\d/, {
      message: 'Password must contain at least one digit',
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Password must contain at least one special character',
    })
    .refine((val) => !/\s/.test(val), {
      message: 'Password must not contain spaces',
    }),
});
