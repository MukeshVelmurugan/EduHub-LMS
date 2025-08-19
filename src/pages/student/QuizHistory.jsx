// lms-dashboard/src/pages/student/QuizHistory.jsx
// QuizHistory component for the LMS dashboard
import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import ChatLauncher from "../../chat/ChatLauncher";

export default function QuizHistory() {
  // Dummy quiz data (replace with API data later)
  const quizAttempts = [
    { id: 1, quiz: "JavaScript Basics", score: 85, total: 100, date: "2025-08-10" },
    { id: 2, quiz: "React Fundamentals", score: 72, total: 100, date: "2025-08-12" },
    { id: 3, quiz: "Data Structures", score: 90, total: 100, date: "2025-08-15" },
    { id: 4, quiz: "Algorithms", score: 40, total: 100, date: "2025-08-16" },
    { id: 5, quiz: "Database Concepts", score: 78, total: 100, date: "2025-08-17" },
  ];

  return (
    <DashboardLayout role="student">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
        📊 Quiz History
      </h1>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6">
            <StatCard 
                title="Total Quizzes" 
                value={quizAttempts.length} 
                color="text-green-600" 
            />
            
            <StatCard
                title="Average Score"
                value={`${(
                quizAttempts.reduce((sum, q) => sum + q.score, 0) / quizAttempts.length
                ).toFixed(1)}%`}
                color="text-red-600"
            />
            
            <StatCard
                title="Best Score"
                value={`${Math.max(...quizAttempts.map((q) => q.score))}%`}
                color="text-blue-600"
            />
            </div>


      {/* Score Trend Chart */}
      <div className="bg-white rounded-2xl shadow p-4 md:p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">📈 Score Trend</h2>
        <div className="w-full h-64 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={quizAttempts}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#4F46E5"
                strokeWidth={2}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quiz Attempts Table */}
      <div className="bg-white rounded-2xl shadow p-4 md:p-6 overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">📜 Quiz Attempts</h2>
        <table className="min-w-full border-collapse border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Quiz</th>
              <th className="p-3 border">Date</th>
              <th className="p-3 border">Score</th>
              <th className="p-3 border">Result</th>
            </tr>
          </thead>
          <tbody>
            {quizAttempts.map((q) => (
              <tr key={q.id} className="hover:bg-gray-50">
                <td className="p-3 border">{q.quiz}</td>
                <td className="p-3 border">{q.date}</td>
                <td className="p-3 border">
                  {q.score}/{q.total}
                </td>
                <td
                  className={`p-3 border font-semibold ${
                    q.score >= 70 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {q.score >= 70 ? "Pass" : "Fail"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ChatLauncher role="student" />
    </DashboardLayout>
  );
}

/* Small reusable Stat Card */
const StatCard = ({ title, value, subtitle, color = "text-gray-800" }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
      {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
    </div>
  );
};
