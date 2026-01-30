
import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../geminiService.js';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', text: '¡Hola! Soy tu asistente de Target POP. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await sendMessageToGemini(userMsg, history);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
  };

  if (!isOpen) {
    return React.createElement('div', { className: 'fixed bottom-6 right-6 z-[999]' },
      React.createElement('button', {
        onClick: () => setIsOpen(true),
        className: 'w-16 h-16 bg-accent text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform'
      }, React.createElement('i', { className: 'ri-chat-smile-3-line text-3xl' }))
    );
  }

  return React.createElement('div', { className: 'fixed bottom-6 right-6 z-[999]' },
    React.createElement('div', { className: 'bg-white rounded-2xl shadow-2xl w-[350px] md:w-[400px] h-[500px] flex flex-col overflow-hidden border border-gray-200' },
      React.createElement('div', { className: 'bg-navy p-4 flex justify-between items-center' },
        React.createElement('span', { className: 'text-white font-bold' }, 'Asistente Target'),
        React.createElement('button', { onClick: () => setIsOpen(false), className: 'text-white/70' }, React.createElement('i', { className: 'ri-close-line text-2xl' }))
      ),
      React.createElement('div', { className: 'flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50' },
        messages.map((m, i) => React.createElement('div', { key: i, className: `flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}` },
          React.createElement('div', { className: `max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-accent text-white' : 'bg-white text-navy shadow-sm border border-gray-100'}` }, m.text)
        )),
        isTyping && React.createElement('div', { className: 'flex justify-start' }, React.createElement('div', { className: 'bg-white p-3 rounded-2xl border' }, '...')),
        React.createElement('div', { ref: chatEndRef })
      ),
      React.createElement('div', { className: 'p-4 bg-white border-t' },
        React.createElement('div', { className: 'flex gap-2' },
          React.createElement('input', {
            type: 'text',
            value: input,
            onChange: (e) => setInput(e.target.value),
            onKeyDown: (e) => e.key === 'Enter' && handleSend(),
            className: 'flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm outline-none',
            placeholder: 'Escribe aquí...'
          }),
          React.createElement('button', { onClick: handleSend, className: 'w-10 h-10 bg-accent text-white rounded-full' }, React.createElement('i', { className: 'ri-send-plane-2-fill' }))
        )
      )
    )
  );
};
