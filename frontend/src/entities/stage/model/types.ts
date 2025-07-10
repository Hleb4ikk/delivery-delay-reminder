import { OrderStage } from "@/src/entities/order/model/types";

export interface Stage {
  id: string;
  orderStage: OrderStage;
  duration?: number;
  dateOfComplete?: Date;
  isActive: boolean;
}
