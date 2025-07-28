import { z } from 'zod';
import { CarrierEnum, StageEnum } from '../enums';

export const createOrderSchema = z.object({
  customerName: z.string().min(1, 'Customer name required'),
  customerEmail: z.email('Invalid email'),
  deliveryAddress: z.string().min(1, 'Delivery address required'),
  estDeliveryDate: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: 'Date format is incorrect',
    })
    .transform((val) => new Date(val)),
  carrier: z.enum(CarrierEnum, 'Carrier from the list is required'),
  packageDescription: z.string().optional(),
});
