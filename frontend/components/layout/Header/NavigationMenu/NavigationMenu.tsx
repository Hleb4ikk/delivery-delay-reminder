import {
  NavigationMenu as NavigationMenuCN,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function NavigationMenu() {
  return (
    <NavigationMenuCN>
      <NavigationMenuList>
        <NavigationMenuLink className="font-[600]" href="/">
          Dashboard
        </NavigationMenuLink>
      </NavigationMenuList>
    </NavigationMenuCN>
  );
}
