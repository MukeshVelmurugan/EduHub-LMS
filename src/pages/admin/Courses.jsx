// lms-dashboard/src/pages/admin/Courses.jsx
// Courses component for the LMS dashboard
import React, { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import ChatLauncher from "../../chat/ChatLauncher";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

export default function Courses() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "React for Beginners",
      instructor: "John",
      students: 120,
      status: "Active",
    },
    {
      id: 2,
      name: "Python Data Science",
      instructor: "Jack",
      students: 85,
      status: "Active",
    },
    {
      id: 3,
      name: "Machine Learning Basics",
      instructor: "Arun",
      students: 60,
      status: "Inactive",
    },
  ]);

  const stats = [
    { title: "Total Courses", value: courses.length, color: "text-blue-600" },
    {
      title: "Active Courses",
      value: courses.filter((c) => c.status === "Active").length,
      color: "text-green-600",
    },
    {
      title: "Inactive Courses",
      value: courses.filter((c) => c.status === "Inactive").length,
      color: "text-red-600",
    },
  ];

  const handleDelete = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <DashboardLayout role="admin">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">New Courses</h1>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 w-full sm:w-auto">
          <FaPlus /> Add Course
        </button>
      </div>

      {/* Course Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-6 text-center"
          >
            <h2 className="text-sm md:text-lg font-semibold text-gray-700">
              {stat.title}
            </h2>
            <p className={`text-xl md:text-3xl font-bold ${stat.color}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search courses..."
          className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Courses List */}
      <div className="bg-white rounded-2xl shadow">
        <h2 className="text-xl font-semibold p-6 border-b">All Courses</h2>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 border-b">Course Name</th>
                <th className="p-4 border-b">Instructor</th>
                <th className="p-4 border-b">Enrolled Students</th>
                <th className="p-4 border-b">Status</th>
                <th className="p-4 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.length > 0 ? (
                courses.map((course) => (
                  <tr key={course.id} className="hover:bg-gray-50">
                    <td className="p-4 border-b">{course.name}</td>
                    <td className="p-4 border-b">{course.instructor}</td>
                    <td className="p-4 border-b">{course.students}</td>
                    <td
                      className={`p-4 border-b font-medium ${
                        course.status === "Active"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {course.status}
                    </td>
                    <td className="p-4 border-b text-center flex justify-center gap-3">
                      <button className="text-blue-600 hover:text-blue-800">
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleDelete(course.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center p-6 text-gray-500"
                  >
                    No courses found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden divide-y">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div key={course.id} className="p-4 flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="font-semibold">{course.name}</span>
                  <span
                    className={`text-sm ${
                      course.status === "Active"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {course.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Instructor: {course.instructor}
                </p>
                <p className="text-sm text-gray-500">
                  Students: {course.students}
                </p>
                <div className="flex gap-4 mt-2">
                  <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <FaEdit /> <span>Edit</span>
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800 flex items-center gap-1"
                    onClick={() => handleDelete(course.id)}
                  >
                    <FaTrash /> <span>Delete</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="p-6 text-center text-gray-500">No courses found.</p>
          )}
        </div>
      </div>

      {/* Chat */}
      <ChatLauncher role="admin" />
    </DashboardLayout>
  );
}
