
// lms-dashboard/src/chat/ChatbotModel.jsx
// ChatbotModal component for the LMS dashboard
// This component provides an interactive chatbot interface for students and admins
// to get quick answers and insights about their courses and activities.

import React, { useEffect, useMemo, useRef, useState } from "react";
import { mockChatbotData } from "../data/mockData";
import { X } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar,
  PieChart, Pie, Cell,
} from "recharts";

export default function ChatbotModal({ isOpen, onClose, role = "student" }) {
  const data = mockChatbotData[role];
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const containerRef = useRef(null);

  const quickReplies = useMemo(() => data.qaData.map((q) => q.question), [data]);

  useEffect(() => {
    if (isOpen) {
      setMessages([{ id: "welcome", from: "bot", type: "text", text: data.welcomeMessage }]);
      setInput("");
      setTimeout(scrollToBottom, 50);
    }
  }, [isOpen, data]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  function scrollToBottom() {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }

  function pushBotAnswer(item) {
    setMessages((prev) => [
      ...prev,
      { id: `bot-text-${Date.now()}`, from: "bot", type: "text", text: item.answer },
      ...(item.chartType
        ? [{
            id: `bot-chart-${Date.now() + 1}`,
            from: "bot",
            type: "chart",
            chartType: item.chartType,
            chartData: item.chartData,
          }]
        : []),
    ]);
  }

  function findAnswer(q) {
    const norm = q.trim().toLowerCase();
    return (
      data.qaData.find((i) => i.question.toLowerCase() === norm) ||
      data.qaData.find((i) => i.question.toLowerCase().includes(norm) || norm.includes(i.question.toLowerCase())) ||
      null
    );
  }

  function handleSend(customText) {
    const text = (customText ?? input).trim();
    if (!text) return;
    setMessages((prev) => [...prev, { id: `user-${Date.now()}`, from: "user", type: "text", text }]);
    setInput("");

    const item = findAnswer(text);
    if (item) {
      pushBotAnswer(item);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-fallback-${Date.now()}`,
          from: "bot",
          type: "text",
          text: "Sorry, I have preset answers for a few topics. Try one of the suggestions below!",
        },
      ]);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div
        className="
          relative flex flex-col bg-white shadow-2xl border border-gray-100
          w-full h-full rounded-none sm:max-w-lg sm:h-[85vh] sm:bottom-4 sm:right-4
        "
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div>
            <h3 className="font-semibold text-gray-900">EduHub Assistant</h3>
            <p className="text-xs text-gray-500 capitalize">Mode: {role}</p>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div
          ref={containerRef}
          className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50"
        >
          {messages.map((m) => (
            <MessageBubble key={m.id} message={m} />
          ))}
        </div>

        <div className="px-4 pt-2 pb-3 border-t bg-white">
          <div className="flex gap-2 flex-wrap mb-2">
            {quickReplies.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-xs px-3 py-1 rounded-full border hover:bg-gray-50"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-gray-200 p-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask something…"
              className="flex-1 border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => handleSend()}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
//  MessageBubble component to display individual messages
// Handles both text and chart messages, with different styles for user and bot messages
function MessageBubble({ message }) {
  const isUser = message.from === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
          isUser
            ? "bg-blue-600 text-white rounded-br-sm"
            : "bg-white text-gray-800 border rounded-bl-sm"
        }`}
      >
        {message.type === "text" ? (
          <p className="whitespace-pre-wrap">{message.text}</p>
        ) : (
          <ChartBubble chartType={message.chartType} data={message.chartData} />
        )}
      </div>
    </div>
  );
}

// ChartBubble component to render charts based on message type
// Supports pie, bar, and line charts based on the data provided

function ChartBubble({ chartType, data }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <div className="text-gray-500">No data.</div>;
  }

  const sample = data[0];
  const numericKeys = Object.keys(sample).filter((k) => typeof sample[k] === "number");

  return (
    <div className="w-[220px] sm:w-[320px] md:w-[420px] h-[220px]">
      <ResponsiveContainer width="100%" height="100%">
        {chartType === "pie" ? (
          <PieChart>
            <Tooltip />
            <Pie data={data} dataKey="value" nameKey="name" outerRadius={80} label>
              {data.map((_, i) => (
                <Cell key={i} />
              ))}
            </Pie>
          </PieChart>
        ) : chartType === "bar" ? (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey={
                Object.keys(sample).find((k) => typeof sample[k] === "string") || "name"
              }
            />
            <YAxis />
            <Tooltip />
            <Legend />
            {numericKeys.map((k) => (
              <Bar key={k} dataKey={k} />
            ))}
          </BarChart>
        ) : (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey={
                Object.keys(sample).find((k) => typeof sample[k] === "string") || "name"
              }
            />
            <YAxis />
            <Tooltip />
            <Legend />
            {numericKeys.map((k) => (
              <Line key={k} type="monotone" dataKey={k} dot />
            ))}
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
