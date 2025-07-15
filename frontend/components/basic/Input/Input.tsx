import { Input as InputCN } from "@/components/ui/input";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
}

export const Input = ({ className, ...props }: InputProps) => {
  return <InputCN className={twMerge("text-sm", className)} {...props} />;
};
