import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToConcierge } from '../services/geminiService';

const ConciergeModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Mirëdita! I am Auron, your 4C Group Concierge. How may I assist you in planning your stay in Albania?', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setLoading(true);

    const responseText = await sendMessageToConcierge(userMsg.text);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText, timestamp: new Date() }]);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 bg-brand-dark text-brand-gold p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Sparkles size={24} />
      </button>

      {/* Modal/Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 w-full max-w-md bg-white shadow-2xl rounded-2xl z-50 overflow-hidden flex flex-col border border-brand-gold/20 animate-fade-in-up h-[600px] max-h-[80vh]">
          {/* Header */}
          <div className="bg-brand-dark p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="bg-brand-gold/20 p-2 rounded-full">
                <Sparkles size={18} className="text-brand-gold" />
              </div>
              <div>
                <h3 className="font-serif font-bold tracking-wide">Auron Concierge</h3>
                <p className="text-xs text-gray-400">Powered by Gemini AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-brand-gold transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand-dark text-white rounded-tr-none' 
                    : 'bg-white border border-gray-200 text-gray-700 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                 <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-gold rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-brand-gold rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-brand-gold rounded-full animate-bounce delay-200"></div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about our hotels..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button 
                onClick={handleSend}
                disabled={loading || !inputValue.trim()}
                className="bg-brand-gold text-white p-2 rounded-full hover:bg-brand-dark transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ConciergeModal;