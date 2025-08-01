import z from 'zod';
import { registerSchema } from '../schemas/register.dto';

export type RegisterDto = z.infer<typeof registerSchema>;
