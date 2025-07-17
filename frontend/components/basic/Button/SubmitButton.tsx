"use client";

import { PrimaryButton } from "@/components/basic/Button";
import { ButtonHTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loader: React.ReactNode;
  className?: string;
  isLoading: boolean;
}

export const SubmitButton = ({
  children,
  loader,
  className,
  isLoading,
  ...props
}: SubmitButtonProps) => {
  return (
    <PrimaryButton
      disabled={isLoading}
      className={twMerge(
        `${isLoading && "opacity-80 cursor-not-allowed "}`,
        className
      )}
      type="submit"
      {...props}
    >
      {isLoading && <div>{loader}</div>}
      {children}
    </PrimaryButton>
  );
};
