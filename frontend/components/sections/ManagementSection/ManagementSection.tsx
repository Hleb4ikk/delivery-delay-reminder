import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AddOrderForm } from "@/components/forms";
import { OrdersTable } from "@/components/sections/ManagementSection/ui/OrdersTable/OrdersTable";
import { SubmitButton } from "@/components/basic/Button";
import { Card } from "@/components/basic/Card";
import { PrimaryButton } from "@/components/basic/Button";
import { Plus, X, LoaderCircle } from "lucide-react";

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
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <PrimaryButton>
                  <Plus />
                  Add Order
                </PrimaryButton>
              </AlertDialogTrigger>
              <AlertDialogContent className="">
                <AlertDialogHeader className="text-left">
                  <AlertDialogTitle className="font-bold">
                    Add New Order
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogCancel className="absolute right-0 border-none shadow-none">
                  <X />
                </AlertDialogCancel>

                <AddOrderForm id="addOrderForm" />
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      }
    >
      <OrdersTable />
    </Card>
  );
};
