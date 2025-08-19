// lms-dashboard/src/role-based-login/AdminLoginSignUp.jsx
// AdminLoginSignUp component for the LMS dashboard
// This component handles the admin login and signup functionality using Firebase authentication

import AuthPage from "./AuthPage";

export default function AdminLoginSignUp() {
  return <AuthPage role="admin" />;
}