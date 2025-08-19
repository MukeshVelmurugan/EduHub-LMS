
// lms-dashboard/src/components/charts/ProgressChart.jsx
// ProgressChart component to visualize course progress over two weeks in the LMS dashboard

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const data = [
  { course: "React", week1: 60, week2: 80 },
  { course: "Java", week1: 50, week2: 60 },
  { course: "OS", week1: 75, week2: 90 },
  { course: "DBMS", week1: 65, week2: 70 },
  { course: "AI", week1: 40, week2: 50 },
];

export default function ProgressChart() {
  return (
    <div className="p-4 bg-white rounded-2xl shadow w-full">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center sm:text-left">
        Course Progress (2 Weeks Comparison)
      </h2>

      <div className="w-full h-[250px] sm:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -10, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="course"
              tick={{ fontSize: 12 }}
              interval={0}
              angle={-20}
              textAnchor="end"
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                fontSize: "12px",
                borderRadius: "8px",
              }}
            />
            <Legend wrapperStyle={{ fontSize: "12px" }} />

            <Bar dataKey="week1" fill="#60a5fa" radius={[6, 6, 0, 0]} name="Week 1" />
            <Bar dataKey="week2" fill="#4f46e5" radius={[6, 6, 0, 0]} name="Week 2" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
