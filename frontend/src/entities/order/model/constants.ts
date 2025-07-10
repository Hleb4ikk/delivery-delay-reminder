import { OrderStage } from "@/src/entities/order/model/types";

export const statusEmojis: Record<OrderStage, string> = {
  [OrderStage.PREPARED]: "📦",
  [OrderStage.DISPATCHED]: "📤",
  [OrderStage.IN_TRANSIT]: "🚚",
  [OrderStage.ARRIVED]: "📥",
  [OrderStage.DELIVERED]: "✅",
};
