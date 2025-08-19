// lms-dashboard/src/pages/admin/Users.jsx
// Users component for the LMS dashboard

import React, { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import ChatLauncher from "../../chat/ChatLauncher";

export default function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "Mukesh Kumar", email: "mukesh@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "John", email: "john@example.com", role: "Student", status: "Inactive" },
    { id: 3, name: "Sarah", email: "sarah@example.com", role: "Instructor", status: "Active" },
    { id: 4, name: "Jack", email: "jack@example.com", role: "Student", status: "Active" },
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const stats = {
    totalUsers: users.length,
    activeUsers: users.filter((u) => u.status === "Active").length,
    inactiveUsers: users.filter((u) => u.status === "Inactive").length,
    admins: users.filter((u) => u.role === "Admin").length,
    instructors: users.filter((u) => u.role === "Instructor").length,
    students: users.filter((u) => u.role === "Student").length,
  };

  return (
    <DashboardLayout role="admin">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Today’s User Report</h1>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 w-full sm:w-auto">
          <FaPlus /> Add User
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard label="Total Users" value={stats.totalUsers} color="text-blue-600" />
        <StatCard label="Active" value={stats.activeUsers} color="text-green-600" />
        <StatCard label="Inactive" value={stats.inactiveUsers} color="text-red-600" />
        <StatCard label="Admins" value={stats.admins} color="text-purple-600" />
      </div>

      {/* Role Breakdown & Recent */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Role Distribution</h2>
          <ul className="space-y-3">
            
            <li className="flex justify-between">
              <span className="text-gray-600">Students</span>
              <span className="font-semibold">{stats.students}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Admin</span>
              <span className="font-semibold">{stats.admins}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Instructors</span>
              <span className="font-semibold">{stats.instructors}</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Users</h2>
          <ul className="space-y-3">
            {users.slice(0, 3).map((user) => (
              <li key={user.id} className="flex justify-between">
                <span className="text-gray-600">{user.name}</span>
                <span
                  className={`text-sm ${
                    user.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {user.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search users..."
          className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Student">Student</option>
          <option value="Instructor">Instructor</option>
        </select>
      </div>

      {/* User List / Table */}
      <div className="bg-white rounded-2xl shadow">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 border-b">Name</th>
                <th className="p-4 border-b">Email</th>
                <th className="p-4 border-b">Role</th>
                <th className="p-4 border-b">Status</th>
                <th className="p-4 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="p-4 border-b">{user.name}</td>
                    <td className="p-4 border-b">{user.email}</td>
                    <td className="p-4 border-b">{user.role}</td>
                    <td className="p-4 border-b">
                      <span
                        className={`px-2 py-1 rounded text-sm ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4 border-b text-center flex justify-center gap-3">
                      <button className="text-blue-600 hover:text-blue-800">
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleDelete(user.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center p-6 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden divide-y">
          {users.length > 0 ? (
            users.map((user) => (
              <div key={user.id} className="p-4 flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="font-semibold">{user.name}</span>
                  <span
                    className={`text-sm ${
                      user.status === "Active" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {user.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500">Role: {user.role}</p>
                <div className="flex gap-4 mt-2">
                  <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <FaEdit /> <span>Edit</span>
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800 flex items-center gap-1"
                    onClick={() => handleDelete(user.id)}
                  >
                    <FaTrash /> <span>Delete</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="p-6 text-center text-gray-500">No users found.</p>
          )}
        </div>
      </div>

      {/* Chat */}
      <ChatLauncher role="admin" />
    </DashboardLayout>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 text-center">
      <h2 className="text-sm md:text-lg font-semibold text-gray-700">{label}</h2>
      <p className={`text-xl md:text-3xl font-bold ${color}`}>{value}</p>
    </div>
  );
}