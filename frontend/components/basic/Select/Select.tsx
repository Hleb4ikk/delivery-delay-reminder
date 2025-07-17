import {
  Select as SelectCN,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Carrier } from "@/types";

interface SelectProps extends React.ComponentProps<typeof SelectCN> {
  name?: string;
  placeholder: string;
  items: Carrier[];
}

export const Select = ({ placeholder, name, items, ...props }: SelectProps) => {
  return (
    <SelectCN name={name} {...props}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item, index) => (
          <SelectItem key={index} value={item.value}>
            {item.value}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectCN>
  );
};
