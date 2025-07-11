import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import UserBadge from "@/src/entities/user/ui/UserBadge";
import { LogOut } from "lucide-react";
import { User } from "@/src/entities/user/model/user";

export default function UserDropdownMenu() {
  const user: User = {
    id: "1",
    name: "Hleb",
    email: "hlebo@gmail.com",
    username: "hlebo12313",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="py-6 focus-visible:ring-0">
          <UserBadge user={user} />
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
