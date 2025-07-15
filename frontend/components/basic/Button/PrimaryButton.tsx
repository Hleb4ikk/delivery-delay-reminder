import { Button } from "@/components/ui/button";
import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface PrimaryButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const PrimaryButton = ({
  children,
  className,
  ...props
}: PrimaryButton) => {
  return (
    <Button
      className={twMerge(
        "bg-blue-500 hover:bg-blue-500 hover:opacity-80",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};
