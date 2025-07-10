import { Truck, LogOut } from "lucide-react";
import UserBadge from "@/src/entities/user/ui/UserBadge";

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { User } from "@/src/entities/user/model/user";

export const Header = () => {
  const user: User = {
    id: "1",
    name: "Hleb",
    email: "hlebo@gmail.com",
    username: "hlebo12313",
  };

  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-6">
            <div className="flex gap-2 group">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Truck className="text-white" size={16} />
              </div>
              <h1 className="text-xl font-bold text-blue-500 hidden sm:block group-hover:bg-">
                DelayedStageReminder
              </h1>
            </div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuLink className="font-[600]" href="/">
                  Dashboard
                </NavigationMenuLink>

                <NavigationMenuLink className="font-[600]" href="/analytics">
                  Analytics
                </NavigationMenuLink>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} className="py-6 focus-visible:ring-0">
                <UserBadge user={user} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-none">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut /> Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
