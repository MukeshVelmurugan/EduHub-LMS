# 📚 EduHub LMS  
An open-source **Learning Management System (LMS)** built with **React, TailwindCSS, and Vercel**.  
EduHub provides an interactive platform for managing courses, users, and educational content efficiently.  
It comes with a **role-based UI (Admin, Student)**, **mock data-driven content** for testing, and a clean responsive design.  



## ✨ Features

- 👤 **Role-Based Access Control (RBAC)** – Distinct dashboards for **Admin, and Student** powered by mock data.  
- 📖 **Course Management (UI)** – Interfaces to add, edit, and view courses 
- 🧑‍💻 **User Management (UI)** – Manage roles and user information with mock data simulation.  
- 📊 **Dashboard with Charts** – Interactive charts integrated using **Recharts**, showcasing mock metrics.  
- 💬 **Chatbot Modal** – Static Q&A chatbot with in-chat chart visualizations for a modern experience.  
- 📱 **Responsive Design** – Fully optimized for **desktop, tablet, and mobile** screens.  
- 🎨 **Reusable Components** – Modular UI components for scalability and clean structure.
- 📂 **Mock Data Driven** – All role-based content, users, courses, and Q&A are powered via local **`.js` files** located inside the `src/data/` folder.  




## 🚀 Tech Stack  

- **Frontend:** React.js + Vite, TailwindCSS
- **Authentication:** Firebase  
- **Hosting:** Vercel  
- **Version Control:** Git + GitHub  



## 🌍 Deployment

Deployed on Vercel: https://mukeshvelmuruganedulms.vercel.app/


## 🖥️ Screenshots  

| <img width="1919" height="978" alt="Screenshot 2025-08-20 013723" src="https://github.com/user-attachments/assets/808235f3-808e-4fdd-a9eb-3318faaf07f8" /> | <img width="1919" height="980" alt="Screenshot 2025-08-20 014048" src="https://github.com/user-attachments/assets/233ff76e-ab3f-4ee3-814c-50da27d2690c" /> | <img width="1919" height="980" alt="Screenshot 2025-08-20 013759" src="https://github.com/user-attachments/assets/ca10c55f-1658-4432-8ce9-d96fd52444a8" /> | <img width="1919" height="980" alt="Screenshot 2025-08-20 013810" src="https://github.com/user-attachments/assets/5debb7c7-7ccc-405f-b4c0-25899c3d9a4e" /> | <img width="1919" height="980" alt="Screenshot 2025-08-20 013820" src="https://github.com/user-attachments/assets/42990352-c4cf-4a43-b6db-4d8e387fec4c" /> | <img width="1919" height="977" alt="Screenshot 2025-08-20 013851" src="https://github.com/user-attachments/assets/9eb37c60-1f47-4ab2-b106-140d145ce789" /> |
|---------------------------------------------|---------------------------------------------| ---------------------------------------------|---------------------------------------------| ---------------------------------------------|---------------------------------------------|
| <img width="1919" height="979" alt="Screenshot 2025-08-20 014021" src="https://github.com/user-attachments/assets/1f974b63-0072-4b43-a139-dea50e694a0f" /> | <img width="1919" height="981" alt="Screenshot 2025-08-20 013550" src="https://github.com/user-attachments/assets/b389e00d-cdbe-4c39-a8f3-7ffbf9a28453" /> | <img width="1919" height="980" alt="Screenshot 2025-08-20 013602" src="https://github.com/user-attachments/assets/03e0d963-88ac-4eaa-8abe-ebde12202ac9" /> | <img width="1919" height="980" alt="Screenshot 2025-08-20 013619" src="https://github.com/user-attachments/assets/e65cc0d8-6832-4eaa-993d-ee2b22fd65fd" /> | <img width="1919" height="981" alt="Screenshot 2025-08-20 013649" src="https://github.com/user-attachments/assets/e6c6c830-6a27-427b-9ca1-af36f4af6d69" /> | <img width="1919" height="977" alt="Screenshot 2025-08-20 013933" src="https://github.com/user-attachments/assets/a857b8ee-20e3-45ea-be87-0e740bb6c39b" /> |



## 📦 Installation  

Clone the repo and run locally:  

```bash
# Clone this repository
git clone https://github.com/MukeshVelmurugan/EduHub-LMS.git

# Navigate to the project folder
cd EduHub-LMS

# Install dependencies
npm install

# Start development server
npm run dev
```
### 🔧 Firebase Setup

To enable Authentication feature, you’ll need to connect your own Firebase project.

#### 1. Create a Firebase Project

Go to Firebase Console.

Click Add Project → enter a project name → continue.

Disable/enable Google Analytics as per your choice → create project.

#### 2. Add a Web App to Firebase

In your Firebase project dashboard, click </> Web App.

Register your app with a nickname (e.g., EduHubApp).

Firebase will give you a Firebase config object (apiKey, authDomain, etc.).
Example:
```
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-messaging-id",
  appId: "your-app-id"
};
```
#### 3. Enable Authentication

In the Firebase console → Authentication → Get Started.

Enable Email/Password (or any other provider you want).

#### 4. Enable Firestore Database

Go to Firestore Database → Create Database.

Choose Start in test mode (for development).

Select a Cloud Firestore location → enable.

#### 5. Update the Project Code

Open the file:

``` 
src/auth_system/firebase.js
```


Replace the values inside firebaseConfig with your own:
```
const firebaseConfig = {
  apiKey: "Your apiKey",
  authDomain: "Your authDomain",
  projectId: "Your projectId",
  storageBucket: "Your storageBucket",
  messagingSenderId: "Your messagingSenderId",
  appId: "Your appId"
};
```
#### 6. Install Firebase Package
```
# Run the following command:

npm install firebase
```
## 📁 Project Folder Structure
```
lms-dashboard/
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   │
│   ├── auth_system/
│   │   ├── firebase.js
│   │   └── ProtectedRoute.jsx
│   │
│   ├── chat/
│   │   ├── ChatbotModel.jsx
│   │   └── ChatLauncher.jsx
│   │
│   ├── components/
│   │   ├── charts/
│   │   │   ├── ActivityPieChart.jsx
│   │   │   ├── EngagementChart.jsx
│   │   │   ├── ProgressChart.jsx
│   │   │   ├── QuizPieChart.jsx
│   │   │   └── RevenueChart.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── NavBar.jsx
│   │   │   └── SideBar.jsx
│   │   │
│   │   └── tables/
│   │       ├── DeadlineTable.jsx
│   │       ├── QuizHistoryTable.jsx
│   │       └── RecentActivityTable.jsx
│   │
│   ├── data/
│   │   └── mockData.js
│   │
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   │
│   │   ├── admin/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── Analytics.jsx
│   │   │   ├── Courses.jsx
│   │   │   └── Users.jsx
│   │   │
│   │   └── student/
│   │       ├── MyCourses.jsx
│   │       ├── QuizHistory.jsx
│   │       └── StudentDashboard.jsx
│   │
│   ├── role-based-login/
│   │   ├── AdminLoginSignUp.jsx
│   │   ├── AuthPage.jsx
│   │   └── StudentLoginSignUp.jsx
│   │
│   └── utils/
│       ├── auth.js
│       └── rbac.js

```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit a pull request.

## 👨‍💻 Author

By MukeshVelmurugan










