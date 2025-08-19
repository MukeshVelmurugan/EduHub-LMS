
// lms-dashboard/src/components/charts/EngagementChart.jsx
// EngagementChart component to visualize weekly engagement data in the LMS dashboard

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const data = [
  { day: "Mon", thisWeek: 40, lastWeek: 30 },
  { day: "Tue", thisWeek: 100, lastWeek: 80 },
  { day: "Wed", thisWeek: 80, lastWeek: 90 },
  { day: "Thu", thisWeek: 120, lastWeek: 100 },
  { day: "Fri", thisWeek: 150, lastWeek: 110 },
  { day: "Sat", thisWeek: 70, lastWeek: 60 },
  { day: "Sun", thisWeek: 90, lastWeek: 75 },
];

export default function EngagementChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-4 w-full">
      <h2 className="text-lg font-semibold mb-4">Weekly Engagement Comparison</h2>

      {/* Responsive Chart */}
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Tooltip />
            <Legend />

            {/* This Week Line */}
            <Line
              type="monotone"
              dataKey="thisWeek"
              stroke="#2563eb" 
              strokeWidth={2}
              dot={{ r: 4 }}
              name="This Week"
            />

            {/* Last Week Line */}
            <Line
              type="monotone"
              dataKey="lastWeek"
              stroke="#f97316"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Last Week"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
