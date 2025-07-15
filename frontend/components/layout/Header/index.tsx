import { Truck } from "lucide-react";

import NavigationMenu from "./NavigationMenu/NavigationMenu";
import UserDropdownMenu from "./UserDropdownMenu/UserDropdownMenu";

export const Header = () => {
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
          <UserDropdownMenu />
        </div>
      </div>
    </header>
  );
};
