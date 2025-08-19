// lms-dashboard/src/components/tables/QuizHistoryTable.jsx
// QuizHistoryTable component to display quiz history in the LMS dashboard

const quizHistory = [
  { quiz: "React Basics", score: "85%", date: "Aug 10, 2025" },
  { quiz: "DBMS Fundamentals", score: "78%", date: "Aug 5, 2025" },
  { quiz: "Java OOP", score: "92%", date: "Aug 2, 2025" },
  { quiz: "Python ML", score: "88%", date: "Jul 28, 2025" },
];

export default function QuizHistoryTable() {
  return (
    <div className="p-4 bg-white rounded-2xl shadow overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">Quiz History</h2>
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="p-2">Quiz</th>
            <th className="p-2">Score</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {quizHistory.map((quiz, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="p-2">{quiz.quiz}</td>
              <td className="p-2">{quiz.score}</td>
              <td className="p-2">{quiz.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
