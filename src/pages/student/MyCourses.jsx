// lms-dashboard/src/pages/student/MyCourses.jsx
// MyCourses component for the LMS dashboard

import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import ChatLauncher from "../../chat/ChatLauncher";

export default function MyCourses() {
  const courses = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      instructor: "Dr Farhan Khan",
      progress: 75,
      description:
        "Learn the fundamentals of ML including supervised and unsupervised learning.",
    },
    {
      id: 2,
      title: "React.js for Beginners",
      instructor: "Mr Lokesh",
      progress: 40,
      description:
        "A beginner-friendly course on React, covering components, hooks, and state management.",
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      instructor: "Prof. Nandha",
      progress: 90,
      description:
        "Master essential DSA concepts with coding challenges and problem-solving.",
    },
    {
      id: 4,
      title: "Data Analysis with Python",
      instructor: "Prof. Jeya",
      progress: 95,
      description:
        "Analyze real-world datasets and build insights using Python libraries.",
    },
    {
      id: 5,
      title: "Data Science",
      instructor: "Prof. Yash",
      progress: 98,
      description:
        "Comprehensive journey into data science concepts and applications.",
    },
    {
      id: 6,
      title: "Algorithms",
      instructor: "Prof. Mukesh",
      progress: 70,
      description:
        "Deep dive into algorithmic thinking and performance optimization.",
    },
  ];

  return (
    <DashboardLayout role="student">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
        My Courses
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2 text-blue-800">
                {course.title}
              </h2>
              <p className="text-sm text-gray-500 mb-1">
                Instructor: {course.instructor}
              </p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {course.description}
              </p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Progress: {course.progress}%
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4">
              <button className="w-full sm:w-auto px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Continue
              </button>
              <button className="w-full sm:w-auto px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <ChatLauncher role="student" />
    </DashboardLayout>
  );
}
