import React, { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, ChevronDown, Filter, BookOpen, Film,Send, Sparkles, MessageSquare, ThumbsUp, ThumbsDown, Star } from 'lucide-react';

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

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = { type: 'user', content: message };
    setMessages(prev => [...prev, userMessage]);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });

      const data = await response.json();
      console.log('Recommendations:', data.recommendations);

      const aiMessage = {
        type: 'ai',
        content: "Based on your interest, here are some recommendations:",
        recommendations: data.recommendations || []
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      console.error('Fetch error:', err);
      setMessages(prev => [...prev, {
        type: 'ai',
        content: "Sorry, something went wrong while fetching recommendations."
      }]);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="max-w-4xl mx-auto p-2">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-900 custom-scroll">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-green-600" />
            <h1 className="text-2xl font-semibold">AI Recommendation Assistant</h1>
          </div>
          <p className="text-gray-600 mt-2 dark:text-gray-500">
            Get personalized recommendations through natural conversation
          </p>
        </div>

        {/* Messages */}
        <div className="h-[340px] p-6 overflow-y-auto bg-gray-50 dark:bg-gray-900 custom-scroll">
          <div className="space-y-6">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`rounded-lg p-4 w-fit max-w-[80%] break-words whitespace-pre-wrap ${
                    msg.type === 'user'
                      ? 'bg-green-600 text-white'
                      : 'bg-white shadow-md dark:bg-gray-800'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {msg.type === 'ai' && (
                      <div className="w-6 h-6 flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-green-600" />
                      </div>
                    )}
                    <div>
                      <p>{msg.content}</p>

                      {/* Recommendations */}
                      {msg.recommendations && (
                        <div className="mt-4 space-y-4">
                          {msg.recommendations.length === 0 ? (
                            <p className="text-sm text-gray-500">No recommendations found for your query.</p>
                          ) : (
                            msg.recommendations.map((rec, idx) => (
                              <div key={idx} className="flex gap-4 bg-gray-100 dark:bg-gray-900 p-3 rounded-lg">
                                <img
                                  src={rec.image || 'https://via.placeholder.com/100x150?text=No+Image'}
                                  alt={rec.title}
                                  className="w-16 h-24 object-cover rounded"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100x150?text=Image+Error';
                                  }}
                                />
                                <div className="flex-1">
                                  <h4 className="font-semibold">{rec.title}</h4>
                                  {rec.author && (
                                    <p className="text-sm text-gray-600 dark:text-gray-400">by {rec.author}</p>
                                  )}
                                  {rec.description && (
                                    <p className="text-sm text-gray-500 mt-1">{rec.description}</p>
                                  )}
                                  {rec.rating && (
                                    <div className="flex items-center gap-1 mt-1">
                                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                      <span className="text-sm">{rec.rating}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))
                          )}

                          <div className="flex items-center gap-2 mt-2">
                            <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                              <ThumbsUp className="h-4 w-4" />
                            </button>
                            <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
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
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="mb-4">
            <div className="text-sm text-gray-600 mb-2 dark:text-gray-500">Quick suggestions:</div>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(suggestion)}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors dark:bg-gray-800 dark:text-gray-400"
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
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:text-white bg-white dark:bg-gray-900 dark:border-gray-800"
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
