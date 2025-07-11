import { LoaderCircle, Plus } from "lucide-react";

import { Card } from "@/src/shared/ui/Card";
import { Input } from "@/src/shared/ui/Input";
import { SubmitButton, PrimaryButton } from "@/src/shared/ui/Button";

export default function TrashPage() {
  return (
    <div>
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
    </div>
  );
}
