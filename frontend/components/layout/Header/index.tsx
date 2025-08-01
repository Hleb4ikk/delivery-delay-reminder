"use client";

import { Truck } from "lucide-react";

import NavigationMenu from "./NavigationMenu/NavigationMenu";
import UserDropdownMenu from "./UserDropdownMenu/UserDropdownMenu";

import { PrimaryButton } from "@/components/basic/Button";

import { AuthForm } from "@/components/auth/AuthForm";
import { getSessionUser } from "@/actions/user";
import { useEffect } from "react";
import { useUser } from "@/context";

export const Header = () => {
  const { user, setUser } = useUser();
  useEffect(() => {
    getSessionUser().then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <header className="bg-white  border-b border-slate-200">
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
            <NavigationMenu />
          </div>
          {!user ? (
            <AuthForm trigger={<PrimaryButton>Sign In</PrimaryButton>} />
          ) : (
            <UserDropdownMenu />
          )}
        </div>
      </div>
    </header>
  );
};
