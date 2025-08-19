// lms-dashboard/src/role-based-login/StudentLoginSignUp.jsx
// StudentLoginSignUp component for the LMS dashboard
// This component handles the student login and signup functionality using Firebase authentication
import AuthPage from "./AuthPage";

export default function StudentLoginSignUp() {
  return <AuthPage role="student" />;
}