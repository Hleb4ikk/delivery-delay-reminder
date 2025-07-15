"use client";

import { Avatar } from "@/components/basic/Avatar";

export const UserBadge = ({
  user,
}: {
  user: {
    id: string;
    name: string;
    email: string;
    username: string;
  };
}) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar />
      <span className="font-[600] text-sm min-[486px]:block hidden">
        {user.username}
      </span>
    </div>
  );
};
