// lms-dashboard/src/data/mockData.js
// Mock data for the LMS dashboard
export const mockUsers = {
  admin: {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@university.edu",
    role: "admin",
    avatar: "/professional-woman-diverse.png",
    department: "Computer Science",
    joinDate: "2022-01-15",
  },
  student: {
    id: "2",
    name: "Alex Chen",
    email: "alex.chen@student.university.edu",
    role: "student",
    avatar: "/young-student.png",
    major: "Computer Science",
    year: "Junior",
    gpa: 8.7,
    enrollmentDate: "2022-08-20",
  },
};

export const mockAdminData = {
  totalUsers: 1247,
  activeUsers: 892,
  totalCourses: 45,
  completionRate: 78.5,
  weeklyStats: [
    { day: "Mon", users: 120, engagement: 85 },
    { day: "Tue", users: 145, engagement: 92 },
    { day: "Wed", users: 132, engagement: 88 },
    { day: "Thu", users: 158, engagement: 95 },
    { day: "Fri", users: 142, engagement: 90 },
    { day: "Sat", users: 98, engagement: 75 },
    { day: "Sun", users: 87, engagement: 68 },
  ],
  recentActivity: [
    { id: 1, user: "John", action: "Completed Course: React Fundamentals", time: "2 hours ago" },
    { id: 2, user: "Jack", action: "Started Course: Advanced JavaScript", time: "4 hours ago" },
    { id: 3, user: "Arun", action: "Submitted Assignment: Database Design", time: "6 hours ago" },
  ],
};

export const mockStudentData = {
  enrolledCourses: 4,
  completedCourses: 12,
  currentGPA: 3.7,
  upcomingDeadlines: [
    {
      id: 1,
      course: "Data Structures",
      assignment: "Binary Tree Implementation",
      dueDate: "2024-01-20",
      priority: "high",
    },
    {
      id: 2,
      course: "Web Development",
      assignment: "React Portfolio Project",
      dueDate: "2024-01-25",
      priority: "medium",
    },
    { id: 3, course: "Database Systems", assignment: "SQL Query Optimization", dueDate: "2024-01-30", priority: "low" },
  ],
  progressData: [
    { course: "Data Structures", progress: 75, grade: "A-" },
    { course: "Web Development", progress: 60, grade: "B+" },
    { course: "Database Systems", progress: 85, grade: "A" },
    { course: "Software Engineering", progress: 45, grade: "B" },
  ],
  recentQuizzes: [
    { id: 1, course: "Data Structures", quiz: "Trees and Graphs", score: 92, maxScore: 100, date: "2024-01-15" },
    { id: 2, course: "Web Development", quiz: "React Hooks", score: 88, maxScore: 100, date: "2024-01-12" },
    { id: 3, course: "Database Systems", quiz: "Normalization", score: 95, maxScore: 100, date: "2024-01-10" },
  ],
};

export const mockChatbotData = {
  admin: {
    welcomeMessage: "Hello! I'm here to help you manage the platform. What would you like to know?",
    qaData: [
      {
        question: "How many active users do we have?",
        answer:
          "Currently, you have 892 active users out of 1,247 total registered users. This represents a 71.5% engagement rate.",
      },
      {
        question: "Show me weekly engagement stats",
        answer: "Here's your weekly engagement overview:",
        chartType: "line",
        chartData: mockAdminData.weeklyStats,
      },
      {
        question: "What's our course completion rate?",
        answer:
          "The overall course completion rate is 78.5%, which is above the industry average of 65%. This shows strong student engagement with your content.",
      },
      {
        question: "Show user activity breakdown",
        answer: "Here's the breakdown of user activity by category:",
        chartType: "pie",
        chartData: [
          { name: "Active Learners", value: 65 },
          { name: "Occasional Users", value: 25 },
          { name: "Inactive", value: 10 },
        ],
      },
    ],
  },
  student: {
    welcomeMessage: "Hi there! I'm your learning assistant. How can I help you today?",
    qaData: [
      {
        question: "What's my current GPA?",
        answer:
          "Your current GPA is 8.7, which is excellent! You're maintaining strong academic performance across all your courses.",
      },
      {
        question: "Show my course progress",
        answer: "Here's your progress across all enrolled courses:",
        chartType: "bar",
        chartData: mockStudentData.progressData.map((c) => ({
          name: c.course,
          progress: c.progress,
          grade: c.grade,
        })),
      },
      {
        question: "What assignments are due soon?",
        answer:
          "You have 3 upcoming assignments: Binary Tree Implementation (due Jan 20 - high priority), React Portfolio Project (due Jan 25 - medium priority), and SQL Query Optimization (due Jan 30 - low priority).",
      },
      {
        question: "Show my quiz performance",
        answer: "Here's your recent quiz performance:",
        chartType: "line",
        chartData: mockStudentData.recentQuizzes.map((q) => ({
          name: q.course,
          percentage: Math.round((q.score / q.maxScore) * 100),
        })),
      },
    ],
  },
};
