
// lms-dashboard/src/chat/ChatLauncher.jsx
// ChatLauncher component for the LMS dashboard
// This component provides a button to launch the chatbot modal for students and admins
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import ChatbotModal from "./ChatbotModel";

export default function ChatLauncher({ role = "student" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="
          fixed bottom-4 right-4 z-[90]
          rounded-full shadow-xl
          p-3 sm:p-4 md:p-5
          bg-blue-600 text-white
          hover:bg-blue-700
          transition-all
          flex items-center justify-space-between
        "
        aria-label="Open EduHub Assistant"
      >
        <div>Ask Me </div><MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-7" />
      </button>

        {/* Chatbot Modal */}
      <ChatbotModal isOpen={open} onClose={() => setOpen(false)} role={role} />
    </>
  );
}
