
import React from 'react';

const projects = [
  { id: '1', title: 'Walmart Exhibición', image: 'https://a.lovart.ai/artifacts/agent/nfWWURDsZWRIbeMs.png' },
  { id: '2', title: 'Chedraui POP', image: 'https://a.lovart.ai/artifacts/agent/ywoHlUngfOEX2y1d.png' }
];

export default function Projects() {
  return React.createElement('div', { className: 'pt-24' },
    React.createElement('section', { className: 'bg-navy py-32 text-white text-center' },
      React.createElement('h1', { className: 'text-6xl font-bold' }, 'Proyectos')
    ),
    React.createElement('section', { className: 'py-24' },
      React.createElement('div', { className: 'max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8' },
        projects.map(p => React.createElement('div', { key: p.id, className: 'rounded-2xl overflow-hidden shadow-lg' },
          React.createElement('img', { src: p.image, className: 'w-full h-64 object-cover' }),
          React.createElement('div', { className: 'p-6' }, React.createElement('h3', { className: 'font-bold text-xl' }, p.title))
        ))
      )
    )
  );
}
