// lms-dashboard/src/components/charts/RevenueChart.jsx
// RevenueChart component to visualize weekly revenue in the LMS dashboard

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", revenue: 400 },
  { day: "Tue", revenue: 1000 },
  { day: "Wed", revenue: 800 },
  { day: "Thu", revenue: 1200 },
  { day: "Fri", revenue: 1500 },
  { day: "Sat", revenue: 700 },
  { day: "Sun", revenue: 900 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-4 w-full">
      <h2 className="text-lg font-semibold mb-4">Weekly Revenue</h2>

      {/* Responsive Chart */}
      <div className="w-full h-64"> 
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
            <Line type="monotone" dataKey="revenue" stroke="#16a34a" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
