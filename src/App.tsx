import React from 'react';
import { motion } from 'framer-motion';
import { SalesAdvisorWidget } from './components/SalesAdvisorWidget';
import { NeuralFeed } from './components/NeuralFeed';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30">
      <SalesAdvisorWidget 
        nodeName="Jm Tecnologia & Accesorios" 
        adn="&quot;{\&quot;google_place_id\&quot;:\&quot;ChIJV30vkrlaZo4RCv-veZr0uHI\&quot;,\&quot;opportunity_score\&quot;:100,\&quot;place_types\&quot;:\&quot;store\&quot;,\&quot;rating\&quot;:3,\&quot;location\&quot;:{\&quot;latitude\&quot;:7.9414434,\&quot;longitude\&quot;:-72.5018568},\&quot;report\&quot;:\&quot;# 🏥 EXPEDIENTE DE INTELIGENCIA: Jm Tecnologia & Accesorios\\n**Nombre:** Jm Tecnologia & Accesorios\\n**Ubicación:** Av. 4 #2375, Barrio Virgilio Barco, Cúcuta, Norte de Santander, Colombia\\n**Rating:** 3 ⭐\\n**Resumen Ejecutivo:** Jm Tecnologia & Accesorios es un negocio de tecnología y accesorios con una ubicación física en Cúcuta, Colombia. A pesar de tener un rating de 3 estrellas, la falta de reseñas y la ausencia de una página web oficial sugieren que el negocio puede estar enfrentando desafíos en términos de visibilidad y satisfacción del cliente. La reseña disponible menciona que el negocio toma más tiempo del acordado, lo que puede indicar problemas de logística o gestión.\\n\\nSOCIAL_INSTAGRAM: null\\nSOCIAL_FACEBOOK: null\\n\\n## 🧬 ADN DEL CLIENTE\\nEl análisis de la reseña disponible sugiere que los clientes de Jm Tecnologia & Accesorios valoran la puntualidad y la eficiencia en la entrega de productos o servicios. La falta de reseñas y la ausencia de una presencia en redes sociales sugiere que el negocio puede no estar aprovechando al máximo las oportunidades de marketing digital y engagement con los clientes. Una visión de futuro para este negocio podría incluir la implementación de estrategias de marketing digital, la mejora de la logística y la gestión de la satisfacción del cliente.\\n\\n## 🏗️ ESTRUCTURA NEURAL SUGERIDA\\n- **Sección 1: Gestión de la Satisfacción del Cliente**: Implementar un sistema de seguimiento de pedidos y entregas para garantizar la puntualidad y la eficiencia en la entrega de productos o servicios.\\n- **Sección 2: Marketing Digital**: Crear una presencia en redes sociales y desarrollar un plan de marketing digital para aumentar la visibilidad y el engagement con los clientes.\\n- **Sección 3: Logística y Gestión**: Revisar y optimizar los procesos de logística y gestión para reducir los tiempos de entrega y mejorar la satisfacción del cliente.\\n\\n## 🦅 CAZA DE COMPETENCIA\\nURL_COMPETENCIA: https://www.apple.com/\\nApple es un competidor de élite en el nicho de tecnología y accesorios. Su sitio web y presencia en redes sociales son ejemplos de cómo un negocio puede aprovechar al máximo las oportunidades de marketing digital y engagement con los clientes. La estética y la experiencia del usuario en el sitio web de Apple son ejemplos de cómo un negocio puede crear una experiencia de compra atractiva y fácil de navegar.\\n\\n## 🏗️ DIRECTIVAS PARA EL ARQUITECTO\\n* **Instrucción técnica 1**: Desarrollar un sitio web que sea fácil de navegar y que ofrezca una experiencia de compra atractiva y segura.\\n* **Instrucción técnica 2**: Implementar un sistema de seguimiento de pedidos y entregas para garantizar la puntualidad y la eficiencia en la entrega de productos o servicios.\\n* **Instrucción técnica 3**: Crear una presencia en redes sociales y desarrollar un plan de marketing digital para aumentar la visibilidad y el engagement con los clientes.\&quot;,\&quot;investigation_status\&quot;:\&quot;completed\&quot;,\&quot;updated_at\&quot;:\&quot;2026-05-21T19:22:38.537Z\&quot;}&quot;" 
      />
      
      const accentColor = "#f97316";

const posts = [
  {
    id: 1,
    title: "Nuevos Accesorios Tecnológicos en Stock",
    content: "Descubre nuestra última colección de accesorios tecnológicos diseñados para mejorar tu experiencia digital. Desde fundas premium hasta cargadores ultrarrápidos, tenemos todo lo que necesitas.",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "MAYO 2026"
  },
  {
    id: 2,
    title: "Ofertas Especiales en Dispositivos Móviles",
    content: "Aprovecha nuestras promociones exclusivas en smartphones y tablets de última generación. Calidad garantizada y precios competitivos para que renueves tu tecnología.",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "MAYO 2026"
  },
  {
    id: 3,
    title: "Servicio Técnico Certificado",
    content: "Contamos con técnicos especializados para reparación y mantenimiento de tus dispositivos. Servicio rápido y confiable con garantía en todos nuestros trabajos.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "JUNIO 2026"
  },
  {
    id: 4,
    title: "Innovación en Audio y Video",
    content: "Explora nuestra selección de audífonos, parlantes y equipos de video con tecnología de vanguardia. Sonido envolvente y calidad de imagen excepcional.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "JUNIO 2026"
  }
];

export default 
  
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">JM</span>
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tighter">JM TECNOLOGÍA & ACCESORIOS</h1>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <span>⭐ 3 (120 reseñas)</span>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">Inicio</a>
            <a href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">Productos</a>
            <a href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">Servicios</a>
            <a href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">Nosotros</a>
          </nav>
          <a
            href="https://wa.me/?text=Hola! Vengo desde su sitio web."
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold transition-colors"
          >
            Reservar
          </a>
        </div>
      </header>

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero background"
        />
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4"
          >
            Tecnología <span className="text-orange-500">Premium</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Accesorios y dispositivos de última generación para tu estilo de vida digital
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#productos"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-colors"
            >
              Explorar Catálogo
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-orange-500" />
          <div className="w-2 h-2 rounded-full bg-white/50" />
          <div className="w-2 h-2 rounded-full bg-white/50" />
        </div>
      </section>

      <section id="productos" className="py-20 px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-1 w-12 rounded-full" style={{ backgroundColor: accentColor }} />
          <h2 className="text-3xl font-black uppercase tracking-tighter italic">Destacados</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Smartphone Premium",
              price: "$1.299.900",
              image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
              name: "Audífonos Inalámbricos",
              price: "$299.900",
              image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
              name: "Cargador Rápido",
              price: "$89.900",
              image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
              name: "Tablet Profesional",
              price: "$1.899.900",
              image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
              name: "Smartwatch",
              price: "$499.900",
              image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
              name: "Funda Antigolpes",
              price: "$49.900",
              image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            }
          ].map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={product.name}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-orange-500 font-bold text-lg mb-4">{product.price}</p>
                <button className="w-full bg-orange-500/20 hover:bg-orange-500/30 text-orange-500 border border-orange-500/30 hover:border-orange-500/50 py-2 rounded-lg font-bold transition-colors">
                  Añadir al Carrito
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-1 w-12 rounded-full" style={{ backgroundColor: accentColor }} />
          <h2 className="text-3xl font-black uppercase tracking-tighter italic">Neural <span style={{ color: accentColor }}>Feed</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map(post => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all"
            >
              <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">Neural Update</span>
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
      </section>

      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-1 w-12 rounded-full" style={{ backgroundColor: accentColor }} />
          <h2 className="text-3xl font-black uppercase tracking-tighter italic">Ubicación</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Visítanos</h3>
            <p className="text-gray-400 mb-6">Av. 4 #2375, Barrio Virgilio Barco, Cúcuta, Norte de Santander, Colombia</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=7.9414434,-72.5018568"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition-colors"
            >
              Cómo Llegar
            </a>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3965.205215420348!2d-72.5040455!3d7.9414434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTYnMjkuMiJOIDcywrAzMCcxMC43Ilc!5e0!3m2!1ses!2sco!4v1716330000000!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-white/10 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JM</span>
                </div>
                <h3 className="text-xl font-black tracking-tighter">JM TECNOLOGÍA & ACCESORIOS</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Tecnología premium y accesorios de última generación para tu estilo de vida digital.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Inicio</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Productos</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Servicios</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Nosotros</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Venta de Dispositivos</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Reparación Técnica</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Accesorios Premium</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Asesoría Especializada</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contáctanos</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Av. 4 #2375, Barrio Virgilio Barco</li>
                <li>Cúcuta, Norte de Santander</li>
                <li>Colombia</li>
                <li className="mt-4">
                  <a href="https://wa.me/?text=Hola! Vengo desde su sitio web." className="hover:text-orange-500 transition-colors">
                    WhatsApp: +57 310 0000000
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              Powered by <a href="https://neural-nexus-inky.vercel.app/" className="hover:text-orange-500 transition-colors">PNN Portal Neural Nexus</a> | <a href="https://neural-nexus-inky.vercel.app/" className="hover:text-orange-500 transition-colors">Nexus Hive Federation</a>
            </p>
          </div>
        </div>
      </footer>
    </div>

      {/* --- SECCIONES INTERMEDIAS DINÁMICAS --- */}
      // ... [SECCIONES INTERMEDIAS...]

      <NeuralFeed nodeId="9d7d00d8-ba6a-49f0-b621-6d510cdb1636" />

      {/* Sección de Ubicación Física */}
      
      <section className="py-20 bg-[#050505] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white uppercase tracking-wider">Jm Tecnologia & Accesorios</h3>
                <p className="text-slate-400 text-sm mt-1">Av. 4 #2375, Barrio Virgilio Barco, Cúcuta, Norte de Santander, Colombia</p>
                <p className="text-blue-400 text-xs font-mono uppercase tracking-widest mt-0.5">** Av. 4 #2375</p>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=7.9414434,-72.5018568" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
            >
              Cómo Llegar
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      </section>
      

      <footer className="py-12 border-t border-white/10 bg-[#020202] text-slate-400">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-white tracking-wider">JM TECNOLOGIA & ACCESORIOS</span>
            <p className="text-[10px] text-slate-600 mt-1">&copy; 2026 Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center gap-6">
            
            <a href="null\nSOCIAL_FACEBOOK:" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
              Instagram
            </a>
            
            
            <a href="null\n\n##" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
              Facebook
            </a>
            
            
            
          </div>
          <div className="text-[10px] text-slate-500 font-mono text-center md:text-right">
            Powered by <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">PNN Portal Neural Nexus</a> | <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Nexus Hive Federation</a>
          </div>
        </div>
      </footer>

      
    </div>
  );
}

// --- NEURAL_INJECTION_POINT ---

export default App;