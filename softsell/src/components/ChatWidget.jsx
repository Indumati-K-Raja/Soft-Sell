import React, { useState } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi there! How can I help you today?" },
  ]);

  const handleSend = () => {
    if (chatInput.trim() === "") return;

    const newMessages = [...messages, { from: "user", text: chatInput }];
    setMessages(newMessages);
    setChatInput("");

    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Thanks for your message! We'll get back shortly." },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg flex flex-col">
          {/* Header */}
          <div className="bg-blue-500 text-white p-3 rounded-t-lg flex justify-between items-center">
            <span className="font-semibold">Chat Support</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-xl hover:scale-110 transition"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] px-4 py-2 rounded-lg ${
                  msg.from === "user"
                    ? "bg-yellow-300 text-black self-end ml-auto"
                    : "bg-blue-600 text-white self-start mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t border-gray-300 dark:border-gray-700">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none"
            />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 text-xl"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
