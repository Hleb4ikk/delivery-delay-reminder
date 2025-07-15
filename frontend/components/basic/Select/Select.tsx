import {
  Select as SelectCN,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectProps extends React.ComponentProps<typeof SelectCN> {
  initialItem: { id: string; value: string };
  items: {
    id: string;
    value: string;
  }[];
}

export const Select = ({ initialItem, items, ...props }: SelectProps) => {
  return (
    <SelectCN {...props}>
      <SelectTrigger>
        <SelectValue placeholder={initialItem.value} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={initialItem.id}>{initialItem.value}</SelectItem>
        {items.map((item, index) => (
          <SelectItem key={index} value={item.id}>
            {item.value}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectCN>
  );
};
