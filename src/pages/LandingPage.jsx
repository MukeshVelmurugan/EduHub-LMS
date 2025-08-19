
// lms-dashboard/src/pages/LandingPage.jsx
// LandingPage component for the LMS dashboard

import { useNavigate } from "react-router-dom";
import { GraduationCap, Shield, Users, BookOpen } from "lucide-react";

export default function LandingPage({ setCurrentUser }) {
  const navigate = useNavigate();

  const handleRoleSelect = (role, path) => {
    const user = { role };
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
    navigate(path);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4 py-6 sm:py-10">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-12 flex flex-col justify-center mt-20 sm:mt-0">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="h-10 w-10 sm:h-12 sm:w-12 text-blue-700" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              EduHub LMS
            </h1>
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
            Choose your role to access your personalized dashboard
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Admin Card */}
          <div className="bg-blue-50 rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between">
            <div>
              <div className="text-center mb-6">
                <div className="mx-auto mb-4 p-4 sm:p-5 bg-blue-100 rounded-full w-fit">
                  <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-blue-700" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                  Administrator
                </h2>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  Manage platform, users, and content oversight
                </p>
              </div>

              <div className="space-y-3 mb-6 text-sm sm:text-base">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>User Management</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Content Oversight</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Platform Analytics</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-auto">
              <button
                onClick={() => handleRoleSelect("admin", "/admin/login")}
                className="w-full bg-blue-700 text-white py-2.5 sm:py-3 rounded-lg font-medium hover:bg-blue-800 transition text-sm sm:text-base"
              >
                Access Admin Dashboard
              </button>
            </div>
          </div>

          {/* Student Card */}
          <div className="bg-blue-50 rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between">
            <div>
              <div className="text-center mb-6">
                <div className="mx-auto mb-4 p-4 sm:p-5 bg-indigo-100 rounded-full w-fit">
                  <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                  Student
                </h2>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  Access courses, track progress, and engage with content
                </p>
              </div>

              <div className="space-y-3 mb-6 text-sm sm:text-base">
                <div className="flex items-center gap-2 text-gray-600">
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Course Access</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Progress Tracking</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Peer Interaction</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-auto">
              <button
                onClick={() => handleRoleSelect("student", "/student/login")}
                className="w-full border border-blue-500 text-blue-600 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition text-sm sm:text-base"
              >
                Access Student Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
