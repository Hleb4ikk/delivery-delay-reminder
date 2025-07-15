import { Textarea as TextareaCN } from "@/components/ui/textarea";

import { twMerge } from "tailwind-merge";

interface TextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Textarea = ({ className, ...props }: TextareaProps) => {
  return <TextareaCN className={twMerge("text-sm", className)} {...props} />;
};
