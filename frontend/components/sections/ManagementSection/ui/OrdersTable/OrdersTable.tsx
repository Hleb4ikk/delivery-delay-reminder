import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Order, OrderStatus } from "@/types";
import { OrderRow } from "./OrderRow";

export const OrdersTable = () => {
  const heads = [
    "Order ID",
    "Customer",
    "Current Stage",
    "Progress",
    "Est. Delivery",
    "Status",
    "Actions",
  ];

  const orders: Order[] = [
    {
      id: "OR-2025-001",
      customerName: "John Smith",
      deliveryAddress: "123 Main St, New York, NY 10001",
      currentStage: 1,
      estimatedDeliveryDate: new Date(2025, 6, 15).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      status: OrderStatus.ON_TIME,
    },
    {
      id: "OR-2025-002",
      customerName: "Kate Smith",
      deliveryAddress: "123 Main St, New York, NY 10001",
      currentStage: 1,
      estimatedDeliveryDate: new Date(2025, 6, 15).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      status: OrderStatus.CRITICAL,
    },
    {
      id: "OR-2025-003",
      customerName: "Lisa Smith",
      deliveryAddress: "123 Main St, New York, NY 10001",
      currentStage: 1,
      estimatedDeliveryDate: new Date(2025, 6, 15).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      status: OrderStatus.DELAYED,
    },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {heads.map((head) => (
            <TableHead className="text-gray-500" key={head}>
              {head}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <OrderRow order={order} key={order.id} />
        ))}
      </TableBody>
    </Table>
  );
};
