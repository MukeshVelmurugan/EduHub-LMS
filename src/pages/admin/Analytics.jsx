// lms-dashboard/src/pages/admin/Analytics.jsx
// Analytics component for the LMS dashboard

import DashboardLayout from "../../components/layout/DashboardLayout";
import ChatLauncher from "../../chat/ChatLauncher";
import QuizPieChart from "../../components/charts/QuizPieChart";
import RevenueChart from "../../components/charts/RevenueChart";

export default function Analytics() {
  return (
    <DashboardLayout role="admin">
      <h1 className="text-2xl font-bold mb-6">Analytics</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold">Active Users</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">1,245</p>
          <p className="text-gray-500">↑ 5% this week</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold">New Enrollments</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">312</p>
          <p className="text-gray-500">↑ 8% this month</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">₹84,500</p>
          <p className="text-gray-500">↑ 12% this month</p>
        </div>
      </div>

      {/* Insights Section */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">User Activity Overview</h2>
        <p className="text-gray-600">
          The platform is experiencing steady growth with more active students and instructors
          engaging in courses. Most active time is between <strong>6 PM - 10 PM</strong>.
        </p>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-6">
            <QuizPieChart />
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
            <RevenueChart />
        </div>
      </div>
      <ChatLauncher role="admin" />
    </DashboardLayout>
  );
}
