"use client";

import { PrimaryButton } from "@/src/shared/ui/Button/PrimaryButton";
import { ButtonHTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loader: React.ReactNode;
  className?: string;
}

export const SubmitButton = ({
  children,
  loader,
  className,
  ...props
}: SubmitButtonProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <PrimaryButton
      onClick={() => setLoading(true)}
      className={twMerge(
        `${loading && "opacity-80 cursor-not-allowed "}`,
        className
      )}
      type="submit"
      {...props}
    >
      {loading && <div>{loader}</div>}
      {children}
    </PrimaryButton>
  );
};
