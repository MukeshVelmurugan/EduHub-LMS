// lms-dashboard/src/pages/student/StudentDashboard.jsx
// StudentDashboard component for the LMS dashboard
// This component displays the student's learning progress, course details, and quiz history
import DashboardLayout from "../../components/layout/DashboardLayout";
import ProgressChart from "../../components/charts/ProgressChart";
import DeadlineTable from "../../components/tables/DeadlineTable";
import QuizHistoryTable from "../../components/tables/QuizHistoryTable";
import QuizPieChart from "../../components/charts/QuizPieChart";
import ChatLauncher from "../../chat/ChatLauncher";

export default function StudentDashboard() {
  return (
    <DashboardLayout role="student">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
        My Learning Dashboard
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card title="Courses Enrolled" value={<span className="text-blue-600">6</span>} subtitle="2 new this month" />
        <Card title="Completed Courses" value={<span className="text-green-600">3</span>} subtitle="50% done" />
        <Card title="Upcoming Quizzes" value={<span className="text-orange-600">4</span>} subtitle="Next: Aug 20" />
        <Card title="Overall Progress" value={<span className="text-purple-600">62%</span>} subtitle="Keep it up!" />
      </div>


      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-2xl shadow h-full">
          <ProgressChart />
        </div>
        <div className="bg-white p-4 rounded-2xl shadow h-full">
          <QuizPieChart />
        </div>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-2xl shadow overflow-x-auto">
          <DeadlineTable />
        </div>
        <div className="bg-white p-4 rounded-2xl shadow overflow-x-auto">
          <QuizHistoryTable />
        </div>
      </div>

      <ChatLauncher role="student" />
    </DashboardLayout>
  );
}

// Reusable Card component
function Card({ title, value, subtitle }) {
  return (
    <div className="p-4 bg-white rounded-2xl shadow flex flex-col justify-between hover:shadow-md transition">
      <h2 className="text-gray-600 text-sm">{title}</h2>
      <p className="text-2xl md:text-3xl font-semibold">{value}</p>
      <span className="text-gray-400 text-xs">{subtitle}</span>
    </div>
  );
}
