import { Order } from "@/types/order";

import { TableCell, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { getOrderStageById } from "@/lib/orderStages";
import { orderStages } from "@/constants";
import { orderStatuses } from "@/constants";

import clsx from "clsx";

export const OrderRow = ({ order }: { order: Order }) => {
  const { id, emoji, status } = getOrderStageById(order.currentStage);

  return (
    <TableRow>
      <TableCell className="font-semibold">{order.id}</TableCell>
      <TableCell className="flex flex-col">
        <p className="font-semibold">{order.customerName}</p>
        <p className="text-gray-500 text-xs">{order.deliveryAddress}</p>
      </TableCell>
      <TableCell>
        {emoji}
        {status}
      </TableCell>
      <TableCell className="flex flex-col gap-1">
        <Progress value={(id / orderStages.length) * 100} />
        <p className="text-gray-500 text-xs">
          Stage {id} of {orderStages.length}
        </p>
      </TableCell>
      <TableCell>{order.estimatedDeliveryDate}</TableCell>
      <TableCell>
        <div
          className={clsx(
            "border-1 rounded-xl px-2 py-1 text-center",
            orderStatuses[order.status].borderColor,
            orderStatuses[order.status].bgColor,
            orderStatuses[order.status].textColor
          )}
        >
          {orderStatuses[order.status].status}
        </div>
      </TableCell>
      <TableCell>pipec </TableCell>
    </TableRow>
  );
};
