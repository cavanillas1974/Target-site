
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Logo = () => React.createElement('img', {
  src: "https://a.lovart.ai/artifacts/agent/rQTkDqrBhvb839Y1.png",
  alt: "Target Logo",
  className: "h-10 md:h-14 w-auto object-contain"
});

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return React.createElement('header', {
    className: `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md h-20' : 'bg-white/95 backdrop-blur-sm h-24'}`
  },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-6 lg:px-12 h-full flex justify-between items-center' },
      React.createElement(Link, { to: '/', className: 'flex items-center gap-3' },
        React.createElement(Logo),
        React.createElement('span', { className: 'hidden md:block font-bold text-navy tracking-wider text-lg' }, 'TARGET INSTALACIONES')
      ),
      React.createElement('nav', { className: 'hidden lg:block' },
        React.createElement('ul', { className: 'flex gap-10' },
          navLinks.map(link => React.createElement('li', { key: link.path },
            React.createElement(Link, {
              to: link.path,
              className: `uppercase text-sm font-bold tracking-widest transition-colors relative pb-1 ${location.pathname === link.path ? 'text-accent border-b-2 border-accent' : 'text-navy hover:text-accent'}`
            }, link.name)
          ))
        )
      ),
      React.createElement('button', {
        className: 'lg:hidden text-navy p-2',
        onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen)
      }, React.createElement('i', { className: `ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-3xl` }))
    ),
    isMobileMenuOpen && React.createElement('div', { className: 'lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-xl' },
      React.createElement('nav', { className: 'p-6' },
        React.createElement('ul', { className: 'flex flex-col gap-6' },
          navLinks.map(link => React.createElement('li', { key: link.path },
            React.createElement(Link, {
              to: link.path,
              className: 'block text-navy font-bold uppercase tracking-widest',
              onClick: () => setIsMobileMenuOpen(false)
            }, link.name)
          ))
        )
      )
    )
  );
};

export const Footer = () => {
  return React.createElement('footer', { className: 'bg-navy-dark text-white pt-20 pb-10' },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-6 lg:px-12' },
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10' },
        React.createElement('div', { className: 'space-y-6' },
          React.createElement('div', { className: 'bg-white p-2 inline-block rounded' }, React.createElement(Logo)),
          React.createElement('p', { className: 'text-white/70 text-sm leading-relaxed max-w-xs' }, 'Líderes en soluciones de instalación y mantenimiento de material P.O.P.')
        ),
        React.createElement('div', null,
          React.createElement('h4', { className: 'font-bold text-lg mb-6' }, 'Enlaces Rápidos'),
          React.createElement('ul', { className: 'space-y-4 text-sm text-white/70' },
            React.createElement('li', null, React.createElement(Link, { to: '/', className: 'hover:text-white' }, 'Inicio')),
            React.createElement('li', null, React.createElement(Link, { to: '/servicios', className: 'hover:text-white' }, 'Servicios'))
          )
        )
      ),
      React.createElement('div', { className: 'pt-10 text-center text-white/30 text-xs' }, '© 2024 Target Instalaciones POP S.A. de C.V.')
    )
  );
};
