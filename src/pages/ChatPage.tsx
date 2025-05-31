import React, { useState } from 'react';
import { Send, User, Bot } from 'lucide-react';

const ChatPage: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! How can I help you today?',
      timestamp: '09:00 AM'
    },
    {
      id: 2,
      type: 'user',
      content: 'I need to reschedule my appointment',
      timestamp: '09:01 AM'
    },
    {
      id: 3,
      type: 'bot',
      content: 'I can help you with that. Which appointment would you like to reschedule?',
      timestamp: '09:01 AM'
    }
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: 'I understand. Let me check the available slots for you.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-xl shadow-sm h-[calc(100vh-8rem)]">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold">Support Chat</h1>
            <p className="text-sm text-gray-500">We typically reply within a few minutes</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex items-start space-x-2 ${
                  msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  msg.type === 'user' ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  {msg.type === 'user' ? (
                    <User size={16} className="text-blue-600" />
                  ) : (
                    <Bot size={16} className="text-gray-600" />
                  )}
                </div>
                <div className={`max-w-[70%] ${
                  msg.type === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'
                } rounded-lg p-3`}>
                  <p>{msg.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;