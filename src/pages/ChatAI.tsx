import React, { useState } from 'react';
import { Send, Sparkles, MessageSquare, ThumbsUp, ThumbsDown } from 'lucide-react';

const ChatAI: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: "Hi! I'm your AI assistant. Tell me what kind of books, movies, or series you're looking for, and I'll help you find the perfect match.",
    }
  ]);

  const suggestions = [
    "I want something like Harry Potter",
    "Recommend a romantic comedy",
    "Looking for sci-fi series",
    "What should I read if I liked 1984?"
  ];

  const handleSend = () => {
    if (!message.trim()) return;
    
    setMessages([
      ...messages,
      { type: 'user', content: message },
      { 
        type: 'ai',
        content: "Based on your interest, I would recommend 'The Name of the Wind' by Patrick Rothfuss. It's a magical fantasy story with a unique magic system and compelling characters. Would you like more similar recommendations?",
        recommendations: [
          {
            title: "The Name of the Wind",
            type: "book",
            author: "Patrick Rothfuss",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&h=400"
          }
        ]
      }
    ]);
    setMessage('');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-green-600" />
            <h1 className="text-2xl font-semibold">AI Recommendation Assistant</h1>
          </div>
          <p className="text-gray-600 mt-2">Get personalized recommendations through natural conversation</p>
        </div>

        <div className="h-[500px] p-6 overflow-y-auto bg-gray-50">
          <div className="space-y-6">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-lg p-4 max-w-[80%] ${
                    msg.type === 'user'
                      ? 'bg-green-600 text-white'
                      : 'bg-white shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {msg.type === 'ai' && (
                      <MessageSquare className="h-5 w-5 text-green-600 mt-1" />
                    )}
                    <div>
                      <p>{msg.content}</p>
                      {msg.recommendations && (
                        <div className="mt-4 bg-gray-50 rounded-lg p-4">
                          {msg.recommendations.map((rec, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                              <img
                                src={rec.image}
                                alt={rec.title}
                                className="w-16 h-24 object-cover rounded"
                              />
                              <div>
                                <h4 className="font-semibold">{rec.title}</h4>
                                <p className="text-sm text-gray-600">by {rec.author}</p>
                                <div className="flex items-center gap-1 mt-1">
                                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                  <span className="text-sm">{rec.rating}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                          <div className="flex items-center gap-2 mt-4">
                            <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                              <ThumbsUp className="h-4 w-4" />
                            </button>
                            <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                              <ThumbsDown className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 border-t bg-white">
          <div className="mb-4">
            <div className="text-sm text-gray-600 mb-2">Quick suggestions:</div>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(suggestion)}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button
              onClick={handleSend}
              className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAI;