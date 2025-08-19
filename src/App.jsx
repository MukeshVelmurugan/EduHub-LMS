// lms-dashboard/src/App.jsx
// App component for the LMS dashboard
// This component sets up the main application structure, routes, and authentication state management

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AdminLoginSignUp from "./role-based-login/AdminLoginSignUp";
import StudentLoginSignUp from "./role-based-login/StudentLoginSignUp";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Users from "./pages/admin/Users";
import Courses from "./pages/admin/Courses";
import Analytics from "./pages/admin/Analytics";
import StudentDashboard from "./pages/student/StudentDashboard";
import MyCourses from "./pages/student/MyCourses";
import QuizHistory from "./pages/student/QuizHistory";

import ProtectedRoute from "./auth_system/ProtectedRoute";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    setLoading(false); 
  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-semibold text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<LandingPage setCurrentUser={setCurrentUser} />} />

        {/* Logins */}
        <Route
          path="/admin/login"
          element={<AdminLoginSignUp setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/student/login"
          element={<StudentLoginSignUp setCurrentUser={setCurrentUser} />}
        />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role={currentUser?.role} module="overview">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute role={currentUser?.role} module="userManagement">
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/courses"
          element={
            <ProtectedRoute role={currentUser?.role} module="courses">
              <Courses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/analytics"
          element={
            <ProtectedRoute role={currentUser?.role} module="analytics">
              <Analytics />
            </ProtectedRoute>
          }
        />

        {/* Student Routes */}
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute role={currentUser?.role} module="overview">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/mycourses"
          element={
            <ProtectedRoute role={currentUser?.role} module="myCourses">
              <MyCourses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/quizhistory"
          element={
            <ProtectedRoute role={currentUser?.role} module="quizHistory">
              <QuizHistory />
            </ProtectedRoute>
          }
        />

        {/* Fallbacks */}
        <Route path="/unauthorized" element={<h1>403 Unauthorized</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}
