
import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    number: '01',
    title: 'Almacenamiento & Distribución',
    icon: 'ri-store-3-line',
    items: [
      '6 ubicaciones nacionales estratégicas',
      'Flota propia de 30+ vehículos',
      'Garantía de entrega a tiempo',
      'Logística integral punto a punto'
    ]
  },
  {
    id: '2',
    number: '02',
    title: 'Implementación POP',
    icon: 'ri-layout-masonry-line',
    items: [
      'Instalación de muebles de piso',
      'Montaje de estanterías y exhibidores',
      'Colocación de stoppers y cenefas',
      'Estructuras promocionales complejas'
    ]
  },
  {
    id: '3',
    number: '03',
    title: 'Mantenimiento SBD',
    icon: 'ri-tools-line',
    items: [
      'Servicio técnico especializado',
      'Soporte y monitoreo 24/7',
      'Reparación inmediata en sitio',
      'Mantenimiento preventivo'
    ]
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="bg-navy py-32 text-white relative overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-2xl text-white/70 max-w-3xl mx-auto">
            Soluciones completas para maximizar el impacto de tu estrategia de comunicación visual en el punto de venta.
          </p>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.id} className="bg-white p-12 rounded-3xl shadow-lg relative overflow-hidden border-b-4 border-transparent hover:border-accent transition-all hover:-translate-y-2 group">
                <span className="absolute top-8 right-8 text-7xl font-bold text-gray-100 group-hover:text-accent/10 transition-colors z-0 select-none">
                  {s.number}
                </span>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-10">
                    <i className={`${s.icon} text-4xl`}></i>
                  </div>
                  <h3 className="text-3xl font-bold text-navy mb-8 leading-tight">{s.title}</h3>
                  <ul className="space-y-4">
                    {s.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-gray-500 font-medium">
                        <i className="ri-checkbox-circle-fill text-accent text-xl flex-shrink-0"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl font-bold text-navy mb-20">Nuestro Proceso de Trabajo</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                {/* Connector Line (visible on desktop) */}
                <div className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-gray-100 z-0"></div>
                
                {[
                    { step: 1, title: 'Análisis', desc: 'Evaluación de necesidades' },
                    { step: 2, title: 'Planeación', desc: 'Estrategia logística' },
                    { step: 3, title: 'Ejecución', desc: 'Implementación experta' },
                    { step: 4, title: 'Soporte', desc: 'Seguimiento continuo' },
                ].map((p, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center group">
                        <div className="w-24 h-24 rounded-full bg-white border-2 border-accent text-navy text-3xl font-bold flex items-center justify-center mb-6 shadow-xl group-hover:bg-accent group-hover:text-white transition-all">
                            {p.step}
                        </div>
                        <h4 className="text-xl font-bold text-navy mb-2">{p.title}</h4>
                        <p className="text-gray-500 text-sm">{p.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
