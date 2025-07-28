import z from 'zod';
import { createOrderSchema } from '../schemas/create-order.schema';

export type CreateOrderDto = z.infer<typeof createOrderSchema>;
