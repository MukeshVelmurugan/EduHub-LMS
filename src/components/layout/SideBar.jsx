// lms-dashboard/src/components/layout/SideBar.jsx
// Sidebar component for the LMS dashboard layout


import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Home,
  Users,
  BookOpen,
  BarChart2,
  LogOut,
  ListChecks,
  Menu,
  X,
  CalendarDays,
} from "lucide-react";
import { getSidebarLinks } from "../../utils/rbac";

export default function Sidebar({ role }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Icons mapping
  const iconMap = {
    Overview: <Home className="w-5 h-5" />,
    Users: <Users className="w-5 h-5" />,
    Courses: <BookOpen className="w-5 h-5" />,
    Analytics: <BarChart2 className="w-5 h-5" />,
    "My Courses": <BookOpen className="w-5 h-5" />,
    "Quiz History": <ListChecks className="w-5 h-5" />,
  };

  const links = getSidebarLinks(role);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const events = [
  { title: "Hackathon 2025", date: "Aug 30", type: "Tech" },
  { title: "Cultural Fest", date: "Sep 10", type: "Cultural" },
  { title: "Sports Meet", date: "Sep 20", type: "Sports" },
  { title: "AI Workshop", date: "Sep 25", type: "Workshop" },
  { title: "Mid-Sem Exams", date: "Oct 5 - Oct 10", type: "Exam" },
  { title: "Diwali Holidays", date: "Nov 1 - Nov 5", type: "Holiday" },
  { title: "Holi Celebration", date: "Dec 15", type: "Cultural" },
  { title: "End-Sem Exams", date: "Dec 20 - Dec 30", type: "Exam" },
];


  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md border"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-md border-r z-40 transform transition-transform duration-300 
        w-64 flex flex-col
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="h-16 flex items-center justify-center border-b">
          {role === "admin" ? (
            <h1 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
              <BookOpen className="w-6 h-6" />
              EduHub Admin
            </h1>
          ) : (
            <h1 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
              <BookOpen className="w-6 h-6" />
              EduHub Student
            </h1>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {links.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 rounded-xl ${
                      isActive
                        ? "bg-blue-100 text-blue-600"
                        : "hover:bg-gray-100"
                    }`
                  }
                >
                  {iconMap[name] || <Home className="w-5 h-5" />}
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Events Section (inside sidebar) */}
        <div className="p-4 border-t max-h-80 overflow-y-auto">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-blue-600 mb-2">
            <CalendarDays className="w-5 h-5" />
            Upcoming Events
          </h2>
          <ul className="space-y-2 text-sm">
            {events.map((event, idx) => (
              <li
                key={idx}
                className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100"
              >
                <p className="font-medium">{event.title}</p>
                <p className="text-gray-500 text-xs">
                  {event.date} • {event.type}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Logout */}
        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-500 hover:text-red-600"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
