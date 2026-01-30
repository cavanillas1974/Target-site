
import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  { id: '1', title: 'Muebles de piso - Walmart', category: 'Mobiliario', image: 'https://a.lovart.ai/artifacts/agent/nfWWURDsZWRIbeMs.png' },
  { id: '2', title: 'Stoppers - Chedraui', category: 'Señalización', image: 'https://a.lovart.ai/artifacts/agent/ywoHlUngfOEX2y1d.png' },
  { id: '3', title: 'Estructuras - Comercial Mexicana', category: 'Estructuras', image: 'https://a.lovart.ai/artifacts/agent/SlKy7faljJl8daBn.png' },
  { id: '4', title: 'Estanterías - Walmart', category: 'Exhibición', image: 'https://a.lovart.ai/artifacts/agent/ErF4V4Io3n22ssol.png' },
  { id: '5', title: 'Estructuras Promocionales - Chedraui', category: 'Promoción', image: 'https://a.lovart.ai/artifacts/agent/6YMVdkqyElQ7aRJA.png' }
];

const Projects: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="bg-navy py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <g fill="white" fillRule="evenodd">
              <path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z" />
            </g>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 tracking-tight">PROYECTOS</h1>
          <div className="flex items-center justify-center gap-4 text-white/60 text-xl tracking-widest uppercase">
            <span className="w-12 h-px bg-white/30"></span>
            Casos de éxito
            <span className="w-12 h-px bg-white/30"></span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl font-bold text-navy">Galería de Proyectos</h2>
                <p className="text-gray-500">Excelencia en implementación de punto de venta</p>
                <div className="w-16 h-1 bg-accent mx-auto rounded"></div>
            </div>

            <div className="grid grid-cols-6 gap-8">
                {projects.map((p, i) => (
                    <div 
                        key={p.id} 
                        className={`group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer h-[400px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                            i < 2 ? 'col-span-6 md:col-span-3' : 'col-span-6 md:col-span-2'
                        }`}
                    >
                        <img src={p.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={p.title} />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-90"></div>
                        
                        <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                            <i className="ri-zoom-in-line text-xl"></i>
                        </div>

                        <div className="absolute bottom-8 left-8 space-y-3">
                            <span className="bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full inline-block">
                                {p.category}
                            </span>
                            <h3 className="text-white text-2xl font-bold">{p.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl font-bold text-navy">Nuestros Clientes</h2>
                <p className="text-gray-500">Empresas que confían en nuestra calidad</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { name: 'Walmart', color: 'text-[#0071ce]' },
                    { name: 'Soriana', color: 'text-[#d11e28]' },
                    { name: 'Elektra', color: 'text-[#da291c]' },
                    { name: 'Liverpool', color: 'text-[#e3186d]' }
                ].map((c, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-xl h-32 flex items-center justify-center shadow-sm hover:shadow-xl hover:border-transparent transition-all relative overflow-hidden group">
                        <span className={`text-3xl font-bold ${c.color} transition-transform group-hover:scale-110`}>
                            {c.name}
                        </span>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-navy transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
