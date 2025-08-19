// lms-dashboard/src/components/charts/ActivityPieChart.jsx
// ActivityPieChart component to visualize user activity in the LMS dashboard

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Active Learners", value: 65 },
  { name: "Occasional Users", value: 25 },
  { name: "Inactive", value: 10 },
];

const COLORS = ["#2563eb", "#10b981", "#f59e0b"];

export default function ActivityPieChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-4 w-full">
      <h2 className="text-lg font-semibold mb-4">User Activity Breakdown</h2>

      {/* Responsive wrapper */}
      <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius="70%"
              fill="#8884d8"
              label
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
