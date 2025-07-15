import { OrderStatus } from "@/types/status";

export const orderStatuses = {
  [OrderStatus.ON_TIME]: {
    status: "On time",
    bgColor: "bg-green-100",
    borderColor: "border-green-300",
    textColor: "text-green-500",
  },
  [OrderStatus.DELAYED]: {
    status: "Delayed",
    bgColor: "bg-amber-100",
    borderColor: "border-amber-300",
    textColor: "text-amber-500",
  },
  [OrderStatus.CRITICAL]: {
    status: "Critical",
    bgColor: "bg-red-100",
    borderColor: "border-red-300",
    textColor: "text-red-500",
  },
};
