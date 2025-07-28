import { CarrierNames } from "./carrier";
import { OrderStages } from "./order-stages";
import { OrderStatus } from "./status";

export type Order = {
  id: string;
  carrier: CarrierNames;
  customerName: string;
  customerEmail: string;
  deliveryAddress: string;
  currentStage: OrderStages;
  estDeliveryDate: string;
  packageDescription: string | null;
  status: OrderStatus;
  updatedAt: Date;
  createdAt: Date;
};
