import { OrderStages } from "@/types/order-stages";

export const orderStages = {
  [OrderStages.PREPARED]: {
    id: 1,
    status: "Order prepared",
    shortStatus: "Prepared",
    emoji: "📦",
    bgColor: "bg-amber-100",
  },
  [OrderStages.DISPATCHED]: {
    id: 2,
    status: "Dispatched from warehouse",
    shortStatus: "Dispatched",
    emoji: "📤",
    bgColor: "bg-slate-100",
  },
  [OrderStages.TRANSIT]: {
    id: 3,
    status: "In transit",
    shortStatus: "Transit",
    emoji: "🚚",
    bgColor: "bg-blue-100",
  },
  [OrderStages.ARRIVED]: {
    id: 4,
    status: "Arrived at delivery location",
    shortStatus: "Arrived",
    emoji: "📥",
    bgColor: "bg-rose-100",
  },
  [OrderStages.DELIVERED]: {
    id: 5,
    status: "Delivered",
    shortStatus: "Delivered",
    emoji: "✅",
    bgColor: "bg-green-100",
  },
};
