"use client";

import { carriers } from "@/constants/";
import { FormEvent } from "react";
import { Input } from "../basic/Input";
import { Textarea } from "../basic/Textarea";
import { Select } from "../basic/Select";
import { DatePicker } from "../basic/DatePicker";

export const AddOrderForm = ({ id }: { id: string }) => {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form id={id} onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="w-full flex flex-col gap-1">
          <label className="font-semibold" htmlFor="customerName">
            Customer Name
          </label>
          <Input placeholder="Enter customer name" id="customerName" />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="font-semibold" htmlFor="email">
            Customer Email
          </label>
          <Input placeholder="Enter customer email" id="email" />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-semibold" htmlFor="address">
          Delivery Address
        </label>
        <Textarea id="address" placeholder="Enter complete delivery address" />
      </div>
      <div className="flex gap-4">
        <div className="w-full flex flex-col gap-1">
          <label className="font-semibold" htmlFor="estDate">
            Estimated Delivery Date
          </label>
          <DatePicker triggerId="estDate" />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="font-semibold" htmlFor="carrier">
            Carrier
          </label>
          <Select
            placeholder="Select carrier"
            items={carriers}
            triggerId="carrier"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-semibold" htmlFor="description">
          Package Description (Optional)
        </label>
        <Textarea
          id="description"
          placeholder="Enter complete delivery address"
        />
      </div>
    </form>
  );
};
