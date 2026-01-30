
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Por favor ingresa tu nombre.';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Ingresa un correo válido.';
    if (formData.message.trim().length < 50) newErrors.message = 'El mensaje debe tener al menos 50 caracteres.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setErrors({});
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <div className="pt-24">
      <section className="relative h-[500px] bg-navy flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069" className="w-full h-full object-cover" alt="Contact Hero" />
        </div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-7xl font-bold mb-6 tracking-tight">CONTACTO</h1>
          <p className="text-2xl font-light text-white/80">¿Listo para transformar tu espacio de ventas?</p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20">
            {/* Info Column */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-navy relative inline-block">
                  Información de Contacto
                  <span className="absolute -bottom-4 left-0 w-16 h-1 bg-accent rounded"></span>
                </h2>
              </div>

              <div className="grid gap-6">
                {[
                  { icon: 'ri-phone-line', label: 'Llámanos', val: '+52 (55) 1234 5678' },
                  { icon: 'ri-mail-line', label: 'Correo Electrónico', val: 'contacto@targetpop.com.mx' },
                  { icon: 'ri-map-pin-line', label: 'Ubicación', val: 'Av. Paseo de la Reforma 222, CDMX, México' },
                  { icon: 'ri-time-line', label: 'Horario de Atención', val: 'Lun - Vie: 9:00 - 18:00' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                      <i className={`${item.icon} text-2xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-1">{item.label}</h4>
                      <p className="text-gray-500">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6 pt-8">
                <h3 className="text-2xl font-bold text-navy">Síguenos en redes</h3>
                <div className="flex gap-4">
                  {['facebook-fill', 'instagram-line', 'linkedin-fill'].map((icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors text-xl shadow-lg">
                      <i className={`ri-${icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-bg p-8 md:p-16 rounded-3xl">
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-navy mb-2">Envíanos un Mensaje</h2>
                <p className="text-gray-500">Completa el formulario y nos pondremos en contacto contigo lo antes posible.</p>
              </div>

              {isSubmitted ? (
                <div className="bg-green-100 text-green-700 p-8 rounded-2xl flex flex-col items-center text-center gap-4 animate-bounce">
                  <i className="ri-checkbox-circle-fill text-5xl"></i>
                  <h3 className="text-2xl font-bold">¡Mensaje Enviado!</h3>
                  <p>Gracias por contactarnos. Nuestro equipo te responderá muy pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-navy uppercase tracking-widest ml-1">Nombre completo *</label>
                    <input 
                      type="text" name="name" value={formData.name} onChange={handleChange}
                      className={`p-4 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-accent outline-none`}
                      placeholder="Tu nombre"
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1 ml-1">{errors.name}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-navy uppercase tracking-widest ml-1">Teléfono</label>
                    <input 
                      type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className="p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent outline-none"
                      placeholder="+52 ..."
                    />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-bold text-navy uppercase tracking-widest ml-1">Correo electrónico *</label>
                    <input 
                      type="email" name="email" value={formData.email} onChange={handleChange}
                      className={`p-4 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-accent outline-none`}
                      placeholder="ejemplo@correo.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1 ml-1">{errors.email}</span>}
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-bold text-navy uppercase tracking-widest ml-1">Mensaje *</label>
                    <textarea 
                      name="message" value={formData.message} onChange={handleChange}
                      rows={5}
                      className={`p-4 rounded-xl border ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-accent outline-none resize-none`}
                      placeholder="¿En qué podemos ayudarte?"
                    ></textarea>
                    {errors.message && <span className="text-red-500 text-xs mt-1 ml-1">{errors.message}</span>}
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button type="submit" className="w-full md:w-auto bg-accent text-white px-12 py-5 rounded-xl font-bold hover:bg-accent-dark transition-all shadow-lg hover:-translate-y-1">
                      ENVIAR MENSAJE
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full relative group cursor-pointer overflow-hidden">
        <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%]" 
            alt="Location Map" 
        />
        <div className="absolute inset-0 bg-navy/20 flex items-center justify-center">
            <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <i className="ri-map-pin-fill text-4xl"></i>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
