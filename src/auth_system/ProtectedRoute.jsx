import { Navigate } from "react-router-dom";
import { getAuth } from "../utils/auth";

// lms-dashboard/src/auth_system/ProtectedRoute.jsx
/**
 * ProtectedRoute component to restrict access based on user role.
 * If the user is not authenticated or does not have the correct role,
 * they will be redirected to the appropriate login page.
 */
export default function ProtectedRoute({ role, children }) {
  const { token, role: savedRole } = getAuth(role);

  if (!token || savedRole !== role) {
    return <Navigate to={role === "admin" ? "/admin/login" : "/student/login"} replace />;
  }

  return children;
}
