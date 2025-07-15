import {
  Avatar as AvatarCN,
  AvatarImage,
  AvatarFallback,
} from "@radix-ui/react-avatar";

import { User } from "lucide-react";

export const Avatar = () => {
  return (
    <AvatarCN className="rounded-full border-1 border-blue-100  bg-blue-100 size-8 flex justify-center items-center">
      <AvatarImage />
      <AvatarFallback>
        <User />
      </AvatarFallback>
    </AvatarCN>
  );
};
