// lms-dashboard/src/utils/rbac.js
// Role-Based Access Control (RBAC) utility for the LMS dashboard
// This file defines roles, permissions, and access control logic for the LMS dashboard application.


export const roles = {
  admin: {
    canAccess: ["overview", "userManagement", "courses", "analytics"],
    sidebarLinks: [
      { name: "Overview", path: "/admin/dashboard", module: "overview" },
      { name: "Users", path: "/admin/users", module: "userManagement" },
      { name: "Courses", path: "/admin/courses", module: "courses" },
      { name: "Analytics", path: "/admin/analytics", module: "analytics" },
    ],
  },
  student: {
    canAccess: ["overview", "myCourses", "quizHistory"],
    sidebarLinks: [
      { name: "Overview", path: "/student/dashboard", module: "overview" },
      { name: "My Courses", path: "/student/mycourses", module: "myCourses" },
      { name: "Quiz History", path: "/student/quizhistory", module: "quizHistory" },
    ],
  },
};

// Check access based on role + module
export function hasAccess(role, module) {
  return roles[role]?.canAccess?.includes(module) ?? false;
}

// Get sidebar links for role
export function getSidebarLinks(role) {
  return roles[role]?.sidebarLinks || [];
}
