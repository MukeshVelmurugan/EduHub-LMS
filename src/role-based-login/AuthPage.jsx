// lms-dashboard/src/role-based-login/AuthPage.jsx
// AuthPage component for the LMS dashboard
// This component handles both login and signup functionality for students and admins using Firebase authentication


import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../auth_system/firebase";
import { useNavigate } from "react-router-dom";
import { setAuth } from "../utils/auth";

const AuthPage = ({ role }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();


const handleAuth = async (e) => {
  e.preventDefault();
  try {
    let userCred;
    if (isLogin) {
      userCred = await signInWithEmailAndPassword(auth, email, password);
    } else {
      userCred = await createUserWithEmailAndPassword(auth, email, password);
    }

    // ✅ Get token and save with role
    const token = await userCred.user.getIdToken();
    setAuth(role, token);

    // Redirect
    if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/student/dashboard");
    }
  } catch (error) {
    alert(error.message);
  }
};


  const handleGoogleAuth = async () => {
  try {
    const userCred = await signInWithPopup(auth, googleProvider);

    const token = await userCred.user.getIdToken();
    setAuth(role, token);

    if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/student/dashboard");
    }
  } catch (error) {
    alert(error.message);
  }
};


  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-cyan-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 sm:p-10 transform transition-all">
        
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 tracking-tight">
            {role === "student" ? "Student Portal" : "Admin Portal"}
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            {isLogin
              ? `Sign in to your ${role} dashboard`
              : `Create a new ${role} account`}
          </p>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleAuth} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-indigo-700 transition-colors duration-300 shadow-md"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Auth */}
        <button
          onClick={handleGoogleAuth}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl font-medium text-sm sm:text-base text-gray-700 hover:bg-gray-100 transition-colors duration-300 shadow-sm"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google logo"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Switch between Login/Signup */}
        <div className="flex justify-center mt-6 text-sm text-gray-600">
          {isLogin ? (
            <p>
              Don’t have an account?{" "}
              <button
                type="button"
                className="text-indigo-600 font-semibold hover:underline"
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                type="button"
                className="text-indigo-600 font-semibold hover:underline"
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
            </p>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-xs sm:text-sm text-gray-400 mt-8">
          © {new Date().getFullYear()} EduLMS. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
