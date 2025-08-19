// lms-dashboard/src/components/layout/NavBar.jsx
// NavBar component for the LMS dashboard layout

import { Bell, Settings } from "lucide-react";

export default function Navbar({ user }) {
  const { name = "Guest", role = "User", avatar = "https://i.pravatar.cc/40" } = user || {};

  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6 sticky top-0 z-30">
      
      <div className="flex items-center gap-2 lg:hidden">
        <span className="text-xl font-bold text-indigo-600 ml-20">EduHub</span>
      </div>

      <div className="hidden lg:flex flex-1 items-center overflow-hidden mx-6">
        <div className="whitespace-nowrap animate-marquee text-sm font-medium text-indigo-700">
          📢 Latest Updates: Students achieved record 95% pass rate • Placement success increased by 20% this year • AI Club projects winning national awards 🚀
        </div>
      </div>

      <div className="flex items-center gap-6 ml-auto">
        <button className="relative">
          <Settings className="w-6 h-6 text-gray-600" />
        </button>

        <button className="relative">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-2">
          <img
            src={avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-xs text-gray-500 capitalize">{role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
