import { LoaderCircle, Plus } from "lucide-react";

import { Card } from "@/src/shared/ui/Card";
import { Input } from "@/src/shared/ui/Input";
import { SubmitButton, PrimaryButton } from "@/src/shared/ui/Button";
import { Select } from "@/src/shared/ui/Select";
import { OrderStage } from "@/src/entities/order/model/types";

export default function TrashPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card title="pipec" footer="shok">
        lol
      </Card>
      <Input />
      <div className="flex gap-4">
        <SubmitButton loader={<LoaderCircle className="animate-spin" />}>
          Submit
        </SubmitButton>
        <PrimaryButton>
          <Plus />
          Add order
        </PrimaryButton>
      </div>
      <Select
        initialItem={{ id: "all", value: "All stages" }}
        items={[
          { id: "prepared", value: OrderStage.PREPARED },
          { id: "dispatched", value: OrderStage.DISPATCHED },
          { id: "transit", value: OrderStage.IN_TRANSIT },
          { id: "arrived ", value: OrderStage.ARRIVED },
          { id: "delivered", value: OrderStage.DELIVERED },
        ]}
      />
    </div>
  );
}
