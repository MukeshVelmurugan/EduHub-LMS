// lms-dashboard/src/components/tables/DeadlineTable.jsx
// DeadlineTable component to display upcoming deadlines in the LMS dashboard

const deadlines = [
  { subject: "React Project", due: "Aug 20, 2025", type: "Assignment" },
  { subject: "DBMS Quiz", due: "Aug 22, 2025", type: "Quiz" },
  { subject: "Java Lab", due: "Aug 25, 2025", type: "Assignment" },
  { subject: "AI Test", due: "Aug 28, 2025", type: "Quiz" },
];

export default function DeadlineTable() {
  return (
    <div className="p-4 bg-white rounded-2xl shadow overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">Upcoming Deadlines</h2>
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="p-2">Subject</th>
            <th className="p-2">Due Date</th>
            <th className="p-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {deadlines.map((item, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="p-2">{item.subject}</td>
              <td className="p-2">{item.due}</td>
              <td className="p-2">{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
