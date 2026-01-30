
import React, { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return React.createElement('div', { className: 'pt-24' },
    React.createElement('section', { className: 'bg-navy py-32 text-white text-center' },
      React.createElement('h1', { className: 'text-6xl font-bold' }, 'Contacto')
    ),
    React.createElement('section', { className: 'py-24' },
      React.createElement('div', { className: 'max-w-lg mx-auto bg-gray-50 p-10 rounded-3xl' },
        sent ? React.createElement('p', { className: 'text-green-600 font-bold text-center' }, '¡Mensaje enviado con éxito!') :
        React.createElement('form', { onSubmit: (e) => { e.preventDefault(); setSent(true); }, className: 'space-y-6' },
          React.createElement('input', { placeholder: 'Nombre', className: 'w-full p-4 rounded-xl border', required: true }),
          React.createElement('input', { placeholder: 'Email', type: 'email', className: 'w-full p-4 rounded-xl border', required: true }),
          React.createElement('textarea', { placeholder: 'Mensaje', className: 'w-full p-4 rounded-xl border', rows: 4, required: true }),
          React.createElement('button', { className: 'w-full bg-accent text-white p-4 rounded-xl font-bold' }, 'ENVIAR')
        )
      )
    )
  );
}
