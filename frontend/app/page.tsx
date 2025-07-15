import { StatisticsSection } from "@/components/sections";
import { PerformanceSection } from "@/components/sections";
import { ManagementSection } from "@/components/sections";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-10">
      <StatisticsSection />
      <PerformanceSection />
      <ManagementSection />
    </div>
  );
}
