import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { UserBadge } from "@/components/basic/UserBadge";
import { LogOut } from "lucide-react";

export default function UserDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="py-6 focus-visible:ring-0">
          <UserBadge
            user={{
              id: "1",
              name: "Hleb",
              email: "hlebo@gmail.com",
              username: "hlebo12313",
            }}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-none">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
