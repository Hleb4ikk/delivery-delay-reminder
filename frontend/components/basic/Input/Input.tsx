import { Input as InputCN } from "@/components/ui/input";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
}

export const Input = ({ ...props }: InputProps) => {
  return <InputCN {...props} />;
};
