export enum OrderStage {
  PREPARED = "Order prepared",
  DISPATCHED = "Dispatched from warehouse",
  IN_TRANSIT = "In transit",
  ARRIVED = "Arrived at delivery location",
  DELIVERED = "Delivered",
}

export interface Order {
  id: string;
  customer: string;
  email: string;
  adress: string;
  orderDate: Date;
  estimatedDeliveryDate: Date;
  carrier: string;
  package: string;
}
