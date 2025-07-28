"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Order } from "@/types";
import { OrderRow } from "./OrderRow";
import { useEffect, useState } from "react";

export const OrdersTable = () => {
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch(`http://localhost:8080/orders?page=${page}`);

      const { code, data } = await response.json();
      console.log(data);
      setOrders(data);
    }
    fetchOrders();
  }, []);

  const heads = [
    "Order ID",
    "Customer",
    "Current Stage",
    "Progress",
    "Est. Delivery",
    // "Status",
    "Actions",
  ];

  if (orders)
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
