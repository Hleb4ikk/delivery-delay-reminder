import z from 'zod';
import { updateOrderSchema } from '../schemas/update-order.schema';

export type UpdateOrderDto = z.infer<typeof updateOrderSchema>;
