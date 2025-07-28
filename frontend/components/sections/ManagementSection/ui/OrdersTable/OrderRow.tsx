import { Order } from "@/types/order";

import { TableCell, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { getOrderStageById } from "@/lib/orderStages";
import { orderStages } from "@/constants";

export const OrderRow = ({ order }: { order: Order }) => {
  const { id, emoji, status } = getOrderStageById(
    orderStages[order.currentStage].id
  );

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
        <Progress
          value={
            (orderStages[order.currentStage].id /
              Object.values(orderStages).length) *
            100
          }
        />
        <p className="text-gray-500 text-xs">
          Stage {id} of {Object.values(orderStages).length}
        </p>
      </TableCell>
      <TableCell>{new Date(order.estDeliveryDate).toDateString()}</TableCell>
      {/* <TableCell>
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
      </TableCell> */}
      <TableCell>actions</TableCell>
    </TableRow>
  );
};
