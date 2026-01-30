
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Logo = () => (
  <img 
    src="https://a.lovart.ai/artifacts/agent/rQTkDqrBhvb839Y1.png" 
    alt="Target Logo" 
    className="h-10 md:h-14 w-auto object-contain"
  />
);

export const Navbar: React.FC = () => {
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

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md h-20' : 'bg-white/95 backdrop-blur-sm h-24'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <Logo />
          <span className="hidden md:block font-bold text-navy tracking-wider text-lg">TARGET INSTALACIONES</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex gap-10">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className={`uppercase text-sm font-bold tracking-widest transition-colors relative pb-1 ${
                    location.pathname === link.path ? 'text-accent border-b-2 border-accent' : 'text-navy hover:text-accent'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-navy p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-3xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-xl">
          <nav className="p-6">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="block text-navy font-bold uppercase tracking-widest"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div className="space-y-6">
            <div className="bg-white p-2 inline-block rounded">
              <Logo />
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Líderes en soluciones de instalación y mantenimiento de material P.O.P. Transformamos espacios comerciales en experiencias de marca efectivas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors"><i className="ri-facebook-fill text-xl"></i></a>
              <a href="#" className="hover:text-accent transition-colors"><i className="ri-instagram-line text-xl"></i></a>
              <a href="#" className="hover:text-accent transition-colors"><i className="ri-linkedin-fill text-xl"></i></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link to="/proyectos" className="hover:text-white transition-colors">Portafolio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Servicios</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/servicios" className="hover:text-white transition-colors">Almacenamiento</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition-colors">Distribución Nacional</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition-colors">Implementación POP</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition-colors">Mantenimiento SBD</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <i className="ri-map-pin-line text-accent"></i> 
                Ciudad de México, México
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-phone-line text-accent"></i> 
                +52 (55) 1234 5678
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-mail-line text-accent"></i> 
                contacto@targetpop.com.mx
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-time-line text-accent"></i> 
                Lun - Vie: 9:00 - 18:00
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 text-center">
            <p className="text-white/40 text-xs mb-8 uppercase tracking-widest">Confían en nosotros</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30">
                {['Walmart', 'Soriana', 'Elektra', 'Liverpool', 'Chedraui', 'OXXO'].map(client => (
                    <span key={client} className="font-bold text-xl md:text-3xl">{client}</span>
                ))}
            </div>
            <div className="mt-12 text-white/30 text-xs italic">
                &copy; 2024 Target Instalaciones POP S.A. de C.V. Todos los derechos reservados.
            </div>
        </div>
      </div>
    </footer>
  );
};
