import { z } from "zod";
import { CarrierNames } from "@/types";

export const addOrderSchema = z.object({
  customerName: z.string().min(1, "Customer name required"),
  customerEmail: z.email("Invalid email"),
  deliveryAddress: z.string().min(1, "Delivery address required"),
  estDeliveryDate: z.date("Date format is incorrect"),
  carrier: z.enum(CarrierNames),
});
