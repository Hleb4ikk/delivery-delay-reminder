import { OrderStatus } from "./status";

export type Order = {
  id: string;
  customerName: string;
  deliveryAddress: string;
  currentStage: number;
  estimatedDeliveryDate: string;
  status: OrderStatus;
};
