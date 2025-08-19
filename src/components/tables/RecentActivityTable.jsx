// lms-dashboard/src/components/tables/RecentActivityTable.jsx
// RecentActivityTable component to display recent user activities in the LMS dashboard

export default function RecentActivityTable() {
  const activities = [
    { name: "John Doe", action: "Completed Course: React Fundamentals", time: "2 hours ago" },
    { name: "Jane Smith", action: "Started Course: Advanced JavaScript", time: "4 hours ago" },
    { name: "Mike Johnson", action: "Submitted Assignment: Database Design", time: "6 hours ago" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <ul>
        {activities.map((a, i) => (
          <li key={i} className="flex justify-between py-2 border-b last:border-0">
            <span>
              <span className="font-semibold">{a.name}</span> — {a.action}
            </span>
            <span className="text-gray-400 text-sm">{a.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
