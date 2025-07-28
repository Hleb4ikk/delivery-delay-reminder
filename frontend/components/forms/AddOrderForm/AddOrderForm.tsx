"use client";

import { z } from "zod";

import { addOrderSchema } from "@/schemas/addOrderSchema";

import { carriers } from "@/constants/";

import { FormEvent } from "react";
import { Input } from "../../basic/Input";
import { Textarea } from "../../basic/Textarea";
import { Select } from "../../basic/Select";
import { DatePicker } from "../../basic/DatePicker";

import { validateForm } from "../validation";
import { FormErrors } from "../types";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";
import { SubmitButton } from "@/components/basic/Button";

async function addOrder(order: z.infer<typeof addOrderSchema>) {
  const response = await fetch("http://localhost:8080/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

  if (!response.ok) {
    throw new Error("Failed to create order");
  }

  return await response.json();
}

export const AddOrderForm = ({ id }: { id: string }) => {
  const [messages, setMessages] = useState<FormErrors<
    z.infer<typeof addOrderSchema>
  > | null>(null);

  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = validateForm(
      new FormData(event.currentTarget),
      addOrderSchema
    );

    if (!result.success) {
      setMessages(result.errors);
    } else {
      addOrder(result.data);

      setMessages(null);
      router.refresh();
    }
  }

  return (
    <form id={id} onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="w-full flex flex-col gap-1">
          <label className="font-semibold" htmlFor="customerName">
            Customer Name
          </label>
          <Input placeholder="Enter customer name" name="customerName" />
          {messages?.customerName && (
            <p className="text-red-500">{messages?.customerName.errors[0]}</p>
          )}
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="font-semibold" htmlFor="customerEmail">
            Customer Email
          </label>
          <Input placeholder="Enter customer email" name="customerEmail" />
          {messages?.customerEmail && (
            <p className="text-red-500">{messages?.customerEmail.errors[0]}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-semibold" htmlFor="deliveryAddress">
          Delivery Address
        </label>
        <Textarea
          name="deliveryAddress"
          placeholder="Enter complete delivery address"
        />
        {messages?.deliveryAddress && (
          <p className="text-red-500">{messages?.deliveryAddress.errors[0]}</p>
        )}
      </div>
      <div className="flex gap-4">
        <div className="w-full flex flex-col gap-1">
          <label className="font-semibold" htmlFor="estDeliveryDate">
            Estimated Delivery Date
          </label>
          <DatePicker triggerName="estDeliveryDate" />
          {messages?.estDeliveryDate && (
            <p className="text-red-500">
              {messages?.estDeliveryDate.errors[0]}
            </p>
          )}
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="font-semibold" htmlFor="carrier">
            Carrier
          </label>
          <Select
            placeholder="Select carrier"
            items={carriers}
            name="carrier"
          />
          {messages?.carrier && (
            <p className="text-red-500">{messages?.carrier.errors[0]}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-semibold" htmlFor="packageDescription">
          Package Description (Optional)
        </label>
        <Textarea
          name="packageDescription"
          placeholder="Enter package description (optional)"
        />
      </div>
      <SubmitButton
        loader={<LoaderCircle className="animate-spin" />}
        form="addOrderForm"
        isLoading={false}
      >
        Send
      </SubmitButton>
    </form>
  );
};
