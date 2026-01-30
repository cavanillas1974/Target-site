
import React from 'react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  { id: '1', name: 'Carlos Rodríguez', role: 'Director General', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop' },
  { id: '2', name: 'Ana Martínez', role: 'Directora de Operaciones', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop' },
  { id: '3', name: 'Roberto Sánchez', role: 'Gerente de Logística', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop' },
  { id: '4', name: 'Lucía Torres', role: 'Gerente Comercial', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop' }
];

const About: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="bg-navy py-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6">NOSOTROS</h1>
          <p className="text-2xl text-white/70 max-w-3xl mx-auto">
            22 años de experiencia transformando ideas en realidad e impulsando marcas en todo el país.
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold text-navy leading-tight">
                  Transformando Espacios <br />
                  <span className="text-accent">Impulsando Marcas</span>
                </h2>
                <div className="w-20 h-1.5 bg-accent rounded"></div>
              </div>
              <p className="text-lg text-gray-500 leading-relaxed">
                En Target Instalaciones POP S.A. de C.V., nos dedicamos a materializar la visión de nuestros clientes. Con más de dos décadas de trayectoria, hemos perfeccionado el arte de la comunicación visual en el punto de venta.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Nuestra pasión es crear entornos que no solo exhiban productos, sino que cuenten historias y generen conexiones emocionales con el consumidor final. Cada proyecto es una oportunidad para innovar y superar expectativas.
              </p>
              <div className="inline-flex items-center gap-4 bg-bg px-8 py-4 rounded-full text-navy font-bold text-lg">
                <i className="ri-history-line text-accent text-2xl"></i>
                22 Años de Experiencia
              </div>
            </div>
            <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl h-[600px]">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000" className="w-full h-full object-cover" alt="About" />
                </div>
                <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-accent rounded-3xl -z-10 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: 'ri-map-pin-range-line', title: 'Red de Distribución', stat: '6 Ubicaciones', desc: 'Cobertura estratégica para llegar a donde tu marca lo necesite.' },
              { icon: 'ri-truck-line', title: 'Flota Vehicular', stat: '30+ Vehículos', desc: 'Logística eficiente y puntual para instalaciones en todo el país.' },
              { icon: 'ri-team-line', title: 'Equipo Profesional', stat: '100% Capacitado', desc: 'Talento humano certificado y comprometido con la excelencia ARGET.' }
            ].map((c, i) => (
              <div key={i} className="bg-white p-12 rounded-2xl text-center shadow-sm hover:-translate-y-2 transition-transform border-b-4 border-transparent hover:border-accent">
                <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-8">
                  <i className={`${c.icon} text-4xl`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">{c.title}</h3>
                <p className="text-gray-500 mb-6">{c.desc}</p>
                <div className="text-3xl font-bold text-navy">{c.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row h-[700px] lg:h-[600px]">
        <div className="w-full lg:w-1/2 bg-navy text-white p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
            <div className="relative z-10 space-y-8">
                <i className="ri-focus-2-line text-6xl text-accent"></i>
                <h2 className="text-5xl font-bold">Misión</h2>
                <p className="text-2xl font-light leading-relaxed text-white/80">
                    Brindar soluciones integrales de comunicación visual y material POP que impulsen las ventas de nuestros clientes, a través de la innovación, calidad y un servicio excepcional que supera estándares.
                </p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 bg-white text-navy p-12 lg:p-24 flex flex-col justify-center">
            <div className="space-y-8">
                <i className="ri-eye-2-line text-6xl text-accent"></i>
                <h2 className="text-5xl font-bold">Visión</h2>
                <p className="text-2xl font-light leading-relaxed text-gray-500">
                    Ser el líder indiscutible en servicios de instalación y mantenimiento de material POP en México, reconocidos por nuestra capacidad de respuesta, cobertura nacional y excelencia operativa.
                </p>
            </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-20 space-y-4">
                <h2 className="text-5xl font-bold text-navy">Nuestro Equipo Directivo</h2>
                <p className="text-gray-500 text-xl">Líderes apasionados que guían el camino hacia la innovación</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member) => (
                    <div key={member.id} className="group relative rounded-2xl overflow-hidden h-[450px] shadow-lg">
                        <img src={member.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={member.name} />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80 translate-y-1/2 group-hover:translate-y-0 transition-transform duration-500"></div>
                        <div className="absolute bottom-8 left-8 text-white transition-transform duration-500 group-hover:-translate-y-2">
                            <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
                            <p className="text-white/70 text-sm uppercase tracking-widest">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;
