
import React from 'react';

const servicesData = [
  { id: '1', number: '01', title: 'Almacenamiento & Distribución', icon: 'ri-store-3-line', items: ['6 sedes nacionales', 'Flota propia', 'Cobertura total'] },
  { id: '2', number: '02', title: 'Implementación POP', icon: 'ri-layout-masonry-line', items: ['Exhibidores', 'Mobiliario', 'Señalética'] },
  { id: '3', number: '03', title: 'Mantenimiento SBD', icon: 'ri-tools-line', items: ['Servicio técnico', 'Soporte 24/7', 'Preventivo'] }
];

export default function Services() {
  return React.createElement('div', { className: 'pt-24' },
    React.createElement('section', { className: 'bg-navy py-32 text-white text-center' },
      React.createElement('h1', { className: 'text-6xl font-bold' }, 'Nuestros Servicios')
    ),
    React.createElement('section', { className: 'py-24 bg-gray-50' },
      React.createElement('div', { className: 'max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8' },
        servicesData.map(s => React.createElement('div', { key: s.id, className: 'bg-white p-10 rounded-3xl shadow-sm' },
          React.createElement('div', { className: 'text-accent text-4xl mb-6' }, React.createElement('i', { className: s.icon })),
          React.createElement('h3', { className: 'text-2xl font-bold mb-4' }, s.title),
          React.createElement('ul', { className: 'space-y-2' }, s.items.map((item, i) => React.createElement('li', { key: i, className: 'text-gray-500' }, `• ${item}`)))
        ))
      )
    )
  );
}
