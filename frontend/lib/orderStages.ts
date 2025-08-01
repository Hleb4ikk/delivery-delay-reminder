import { orderStages } from "@/constants";

export function getOrderStageById(id: number) {
  const orderStage = Object.values(orderStages).find(
    (stage) => stage.id === id
  );
  if (!orderStage) throw new Error("Order stage not found");
  return orderStage;
}
