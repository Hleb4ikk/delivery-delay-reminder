import {
  Card as CardCN,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { twMerge } from "tailwind-merge";

interface CardProps {
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const Card = ({ header, children, footer, className }: CardProps) => {
  return (
    <CardCN
      className={twMerge("border-border shadow-xs rounded-md", className)}
    >
      {header && <CardHeader>{header}</CardHeader>}
      {children && <CardContent>{children}</CardContent>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardCN>
  );
};
