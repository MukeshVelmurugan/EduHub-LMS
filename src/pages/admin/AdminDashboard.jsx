// lms-dashboard/src/pages/admin/AdminDashboard.jsx
// AdminDashboard component for the LMS dashboard

import DashboardLayout from "../../components/layout/DashboardLayout";
import EngagementChart from "../../components/charts/EngagementChart";
import ActivityPieChart from "../../components/charts/ActivityPieChart";
import RecentActivityTable from "../../components/tables/RecentActivityTable";
import ChatLauncher from "../../chat/ChatLauncher";
export default function AdminDashboard() {
  return (
    <DashboardLayout role="admin">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card title="Total Users" value="1,247" subtitle="+12% from last month" color="text-blue-600" />
        <Card title="Active Users" value="892" subtitle="71.5% engagement" color="text-green-600" />
        <Card title="Total Courses" value="45" subtitle="+3 this month" color="text-purple-600" />
        <Card title="Completion Rate" value="78.5%" subtitle="Above industry avg" color="text-pink-600" />
      </div>


      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <EngagementChart />
        <ActivityPieChart />
      </div>

      {/* Recent Activity */}
      <RecentActivityTable />
      <ChatLauncher role="admin" />
    </DashboardLayout>
  );
}

// Reusable Card component
// Card.jsx
function Card({ title, value, subtitle, color = "text-indigo-600" }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
      <p className="text-xs text-gray-400">{subtitle}</p>
    </div>
  );
}

