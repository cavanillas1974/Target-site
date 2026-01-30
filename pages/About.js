
import React from 'react';

export default function About() {
  return React.createElement('div', { className: 'pt-24' },
    React.createElement('section', { className: 'bg-navy py-32 text-white text-center' },
      React.createElement('h1', { className: 'text-6xl font-bold' }, 'Nosotros')
    ),
    React.createElement('section', { className: 'py-24' },
      React.createElement('div', { className: 'max-w-7xl mx-auto px-6 text-center' },
        React.createElement('p', { className: 'text-xl text-gray-600' }, 'Con más de 22 años de experiencia, somos líderes en la implementación de puntos de venta en México.')
      )
    )
  );
}
