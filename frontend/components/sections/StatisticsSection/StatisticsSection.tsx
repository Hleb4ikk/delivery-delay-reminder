import { Card } from "@/components/basic/Card";
import { orderStages } from "@/constants";
import clsx from "clsx";

export const StatisticsSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-5">
      {Object.values(orderStages).map((stage) => (
        <Card key={stage.id}>
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-gray-600">
                {stage.status.length > 20 ? stage.shortStatus : stage.status}
              </h2>
              <p className="font-bold text-xl">{stage.id}</p>
            </div>
            <div
              className={clsx(
                "flex items-center justify-center text-xl p-2 rounded-md",
                stage.bgColor
              )}
            >
              {stage.emoji}
            </div>
          </div>
        </Card>
      ))}
    </section>
  );
};
