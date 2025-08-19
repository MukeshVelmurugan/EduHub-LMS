// lms-dashboard/src/components/layout/DashboardLayout.jsx
// DashboardLayout component to structure the LMS dashboard layout with a sidebar and navbar

import Navbar from "./NavBar";
import Sidebar from "./SideBar";

export default function DashboardLayout({ children, role }) {
  const users = {
    admin: { name: "Admin User", role: "Administrator", avatar: "https://static.vecteezy.com/system/resources/previews/006/877/567/non_2x/work-character-solid-icon-illustration-office-workers-teachers-judges-police-artists-employees-free-vector.jpg" },
    student: { name: "Student", role: "Learner", avatar: "https://cdn0.iconfinder.com/data/icons/school-medicine-people-1/110/Student-2-512.png" },
  };

  const user = users[role] || { name: "Guest", role: "User", avatar: "https://i.pravatar.cc/40" };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar role={role} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col transition-all duration-300 lg:ml-64">
        <Navbar user={user} />

        {/* Page Content */}
        <main
          className="
            flex-1
            overflow-y-auto
            bg-gray-50
            p-3 sm:p-4 md:p-6 lg:p-8
            pt-16
          "
        >
          <div
            className="
              max-w-7xl mx-auto
              w-full
              min-h-full
              flex flex-col
            "
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
