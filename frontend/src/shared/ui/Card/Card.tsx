import {
  Card as CardCN,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardProps {
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const Card = ({ title, children, footer, className }: CardProps) => {
  return (
    <CardCN className="border-border shadow-xs">
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      {children && <CardContent>{children}</CardContent>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardCN>
  );
};
