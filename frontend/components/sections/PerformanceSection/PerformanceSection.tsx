import { Card } from "@/components/basic/Card";

export const PerformanceSection = () => {
  return (
    <Card
      header={
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Delivery Performance</h2>
          <div className="flex gap-3 text-sm text-gray-600">
            <div className="flex gap-2 items-center">
              <div className="bg-green-500 rounded-full min-w-3 min-h-3" />
              <h3>On Time</h3>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-orange-500 rounded-full min-w-3 min-h-3" />
              <h3>Delayed</h3>
            </div>
          </div>
        </div>
      }
    >
      <section className="sm:grid sm:grid-cols-3 flex flex-wrap items-center gap-6 justify-center text-gray-600 text-sm px-10">
        <div className="flex flex-col items-center ">
          <p className="text-green-500 font-bold text-3xl">67%</p>
          <h4>On-Time Delivery Rate</h4>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-orange-500 font-bold text-3xl">33%</p>
          <h4>Delayed Deliveries</h4>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-black font-bold text-3xl">2.3</p>
          <h4>Avg Days to Delivery</h4>
        </div>
      </section>
    </Card>
  );
};
