import {
  Select as SelectCN,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Carrier } from "@/types";

interface SelectProps extends React.ComponentProps<typeof SelectCN> {
  triggerId?: string;
  placeholder: string;
  items: Carrier[];
}

export const Select = ({
  placeholder,
  triggerId,
  items,
  ...props
}: SelectProps) => {
  return (
    <SelectCN {...props}>
      <SelectTrigger className="w-full" id={triggerId}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item, index) => (
          <SelectItem key={index} value={item.id}>
            {item.value}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectCN>
  );
};
