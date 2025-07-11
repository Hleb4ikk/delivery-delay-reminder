"use client";
import { User } from "../model/user";
import { Avatar } from "@/src/shared/ui/Avatar/Avatar";

export default function UserBadge({ user }: { user: User }) {
  return (
    <div className="flex items-center gap-2">
      <Avatar />
      <span className="font-[600] text-sm min-[486px]:block hidden">
        {user.username}
      </span>
    </div>
  );
}
