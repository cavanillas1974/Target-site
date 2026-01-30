
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return React.createElement('div', { className: 'pt-24' },
    React.createElement('section', { className: 'relative h-[85vh] flex items-center bg-navy text-white overflow-hidden' },
      React.createElement('div', { className: 'absolute inset-0 z-0' },
        React.createElement('img', { 
          src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", 
          className: "w-full h-full object-cover opacity-20" 
        })
      ),
      React.createElement('div', { className: 'relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full' },
        React.createElement('h1', { className: 'text-5xl md:text-7xl font-bold leading-tight animate-fade-in' }, 
          'Soluciones Integrales de ', React.createElement('span', { className: 'text-accent' }, 'Comunicación Visual')
        ),
        React.createElement('p', { className: 'text-xl mt-6 text-white/80' }, '22 años de experiencia transformando puntos de venta.'),
        React.createElement('div', { className: 'flex gap-4 mt-10' },
          React.createElement(Link, { to: '/contacto', className: 'bg-accent px-10 py-5 rounded-full font-bold' }, 'COTIZAR'),
          React.createElement(Link, { to: '/proyectos', className: 'border border-white/30 px-10 py-5 rounded-full font-bold' }, 'VER PROYECTOS')
        )
      )
    )
  );
}
