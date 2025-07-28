import z from 'zod';
import { createOrderSchema } from './create-order.schema';
import { StageEnum } from '../enums';

export const updateOrderSchema = createOrderSchema.partial().extend({
  currentStage: z.enum(StageEnum, 'Stage from the list is required').optional(),
});
