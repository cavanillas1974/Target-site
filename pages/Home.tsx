
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20" 
            alt="Hero Background"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
              Soluciones Integrales de <span className="text-accent">Comunicación Visual</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-xl">
              22 años de experiencia creando impacto en eventos promocionales y puntos de venta en todo México.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contacto" className="bg-accent hover:bg-accent-dark text-white font-bold px-10 py-5 rounded-full transition-all shadow-xl hover:-translate-y-1">
                SOLICITAR COTIZACIÓN
              </Link>
              <Link to="/proyectos" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold px-10 py-5 rounded-full transition-all">
                VER PROYECTOS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-dark py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { val: '22+', lab: 'Años de Experiencia' },
              { val: '6', lab: 'Sedes Nacionales' },
              { val: '30+', lab: 'Vehículos Propios' },
              { val: '100%', lab: 'Cobertura Nacional' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-6xl font-bold text-accent">{stat.val}</div>
                <div className="text-white/60 text-sm uppercase tracking-widest">{stat.lab}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-navy relative inline-block">
              Nuestros Servicios
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-accent rounded"></span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Excelencia operativa en cada etapa de su proyecto POP</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'ri-store-3-line', title: 'Almacenamiento', desc: 'Logística integral para sus materiales promocionales con 6 sedes estratégicas.' },
              { icon: 'ri-layout-masonry-line', title: 'Implementación POP', desc: 'Instalación profesional de elementos visuales para maximizar el impacto de su marca.' },
              { icon: 'ri-tools-line', title: 'Mantenimiento', desc: 'Servicio técnico especializado para asegurar la durabilidad de sus activos.' }
            ].map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border-t-4 border-transparent hover:border-accent group">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                  <i className={`${s.icon} text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                <Link to="/servicios" className="text-accent font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Saber más <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl font-bold text-navy">Proyectos Recientes</h2>
                <p className="text-gray-500">Casos de éxito con las cadenas más importantes del país</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="relative group overflow-hidden rounded-2xl h-[500px] shadow-lg">
                    <img src="https://a.lovart.ai/artifacts/agent/nfWWURDsZWRIbeMs.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Walmart" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-10 left-10 text-white">
                        <span className="text-accent font-bold text-xs uppercase tracking-widest bg-white/10 backdrop-blur px-3 py-1 rounded-full">Exhibición</span>
                        <h3 className="text-3xl font-bold mt-4">Implementación Walmart</h3>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    {[
                        { img: 'https://a.lovart.ai/artifacts/agent/ywoHlUngfOEX2y1d.png', title: 'Chedraui' },
                        { img: 'https://a.lovart.ai/artifacts/agent/SlKy7faljJl8daBn.png', title: 'Comercial Mex.' },
                        { img: 'https://a.lovart.ai/artifacts/agent/ErF4V4Io3n22ssol.png', title: 'Renovación Walmart' },
                        { img: 'https://a.lovart.ai/artifacts/agent/6YMVdkqyElQ7aRJA.png', title: 'Activación Chedraui' }
                    ].map((p, i) => (
                        <div key={i} className="relative group overflow-hidden rounded-2xl h-[240px] shadow-md">
                            <img src={p.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={p.title} />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-bold text-sm">{p.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Link to="/proyectos" className="mt-16 bg-navy text-white px-10 py-4 rounded-full font-bold hover:bg-accent transition-colors">
                VER PORTAFOLIO COMPLETO
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
