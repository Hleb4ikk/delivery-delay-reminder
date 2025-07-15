import { OrdersTable } from "@/components/sections/ManagementSection/ui/OrdersTable/OrdersTable";

import { Card } from "@/components/basic/Card";
import { PrimaryButton } from "@/components/basic/Button";
import { Plus } from "lucide-react";

export const ManagementSection = () => {
  return (
    <Card
      header={
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Delivery Management</h2>
            <p className="text-gray-600 text-sm">
              Track and manage all delivery stages
            </p>
          </div>
          <div>
            <PrimaryButton>
              <Plus />
              Add Order
            </PrimaryButton>
          </div>
        </div>
      }
    >
      <OrdersTable />
    </Card>
  );
};
