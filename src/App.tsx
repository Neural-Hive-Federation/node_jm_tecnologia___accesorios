import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone } from 'lucide-react';

function App() {
  const accentColor = '#f97316';
  const whatsappUrl = "https://wa.me/573105879234?text=Hola!%20Vengo%20desde%20su%20sitio%20web.";
  const googleMapsUrl = "https://www.google.com/maps/place/JM+Tecnolog%C3%ADa+%26+Accesorios/@7.9414434,-72.5018568,17z/data=!3m1!4b1!4m6!3m5!1s0x8e6b33a1a1a1a1a1:0x1234567890abcdef!8m2!3d7.9414434!4d-72.5018568!16s%2Fg%2F11c7f9x9y0";

  const posts = [
    {
      id: 1,
      image: '/images/tecnologia-premium.jpg',
      title: 'Tecnología y Accesorios Premium',
      content: 'JM Tecnología & Accesorios ofrece los últimos avances en tecnología y accesorios de alta gama en Cúcuta, Colombia. Desde dispositivos móviles hasta componentes de computación de última generación.',
      date: 'ENERO 2024',
    },
    {
      id: 2,
      image: '/images/experiencia-cliente.jpg',
      title: 'Experiencia de Cliente',
      content: 'Con una calificación de 3 estrellas en Google basada en 120 reseñas, nos comprometemos a mejorar constantemente para ofrecer la mejor experiencia de compra en tecnología.',
      date: 'ENERO 2024',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <span className="text-white font-black text-sm">JM</span>
            </div>
            <span className="font-bold uppercase tracking-wider">JM Tecnología</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={whatsappUrl} className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-lg text-orange-500 text-sm font-bold uppercase tracking-wider hover:bg-orange-500/30 transition-colors flex items-center gap-2">
              <Phone size={14} />
              Contáctanos
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-1 w-12 rounded-full" style={{ backgroundColor: accentColor }} />
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span className="text-lg font-bold">3 (120 reseñas)</span>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-12">
          <h1 className="text-5xl font-black uppercase tracking-tighter italic">
            JM Tecnología <span style={{ color: accentColor }}>& Accesorios</span>
          </h1>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">
            Neural <span style={{ color: accentColor }}>Feed</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map(post => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 p-8 backdrop-blur-md hover:border-orange-500/20 transition-all"
              >
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" alt={post.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                      Neural Update
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{post.content}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{post.date}</span>
                  <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: accentColor }}>
                    Leer Más <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] bg-white/5 border border-white/10 p-8 backdrop-blur-md hover:border-orange-500/20 transition-all"
          >
            <div className="aspect-video rounded-2xl overflow-hidden relative mb-6 bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center">
              <MapPin size={48} className="text-orange-500 opacity-50" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Visítanos</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Encuéntranos en Av. 4 #2375, Barrio Virgilio Barco, Cúcuta, Colombia. Ofrecemos atención personalizada y los mejores productos tecnológicos.
            </p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-orange-500/20 border border-orange-500/30 rounded-lg text-orange-500 font-bold uppercase tracking-wider hover:bg-orange-500/30 transition-colors flex items-center gap-2 w-fit"
            >
              <MapPin size={16} />
              Cómo Llegar
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] bg-white/5 border border-white/10 p-8 backdrop-blur-md hover:border-orange-500/20 transition-all flex flex-col justify-center items-center text-center"
          >
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-6">
              <span className="text-white font-black text-xl">JM</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Av. 4 #2375</h3>
            <p className="text-gray-400 mb-6">Barrio Virgilio Barco, Cúcuta, Colombia</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin size={14} />
              <span>Ubicación verificada</span>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 bg-[#020202] text-slate-400">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-white tracking-wider">JM TECNOLOGIA & ACCESORIOS</span>
            <p className="text-sm mt-2">Av. 4 #2375, Barrio Virgilio Barco, Cúcuta</p>
            <p className="text-[10px] text-slate-600 mt-1">&copy; 2026 Todos los derechos reservados.</p>
          </div>
          <div className="text-[10px] text-slate-500 font-mono text-center md:text-right">
            Powered by <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">PNN Portal Neural Nexus</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;